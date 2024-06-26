import React, { 
    useState,
    useRef,
    useEffect,
    useContext,
    createContext 
} from 'react';
import { Link } from 'react-router-dom';
// dropdown context for open state
const DropdownContext = createContext({
    open: false,
    setOpen: () => {},
});
// dropdown content for displaying dropdown
const DropdownContainer =({ children ,postion,...props})=> {
    const { open } = useContext(DropdownContext); // get the context
    const postions = {
        'top':'bottom-full',
        'bottom':'top-full',
        'bottom-left':'top-full -right-0',
        'bottom-center':'top-full right-1/2 translate-x-1/2',
        'bottom-right':'top-full -left-0',
        'top-left':'bottom-full -right-0',
        'top-center':'bottom-full right-1/2 translate-x-1/2',
        'top-right':'bottom-full -left-0',
    }
    return (
      <>
        {open &&
            <div className={`absolute ${postion ? postions[postion]:postions['top-center']} shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] right-0 z-50 ${props.className && props.className}`} >
                {children}
            </div>
        }
        </>
    );
}

// dropdown items for dropdown menus
const DropdownItemText = ({children}) => {
    return (
        <span className='font-medium whitespace-nowrap'>
             {children}
        </span>
    )
}
const DropdownSeparator = () => {
    return (
        <hr className='w-full border-teal-700 border-0.5 my-1'/>
    )
}
const DropdownItemIcon = ({children}) => {
    return (
        <span className='w-8 h-8 flex items-center justify-center rounded-full bg-teal-950 mr-3 overflow-hidden '>
            {children}
        </span>
    )
}
const DropdownItem = ({to,onClick, children, ...props }) => {
  return (
    <Link to={to} onClick={onClick} className="flex items-center px-3 py-1.5 text-sm text-gray-100 capitalize transition-colors duration-150 transform hover:bg-teal-700">
        {children}
    </Link>
  );
};

// dropdown button for triggering open
const DropdownButton =({ children, ...props }) => {
    const { open, setOpen } = useContext(DropdownContext); // get the context
    // to open and close the dropdown
    function toggleOpen() {
      setOpen(!open);
    }
    return (
        <div className={`cursor-pointer group w-full ${open ? 'dropdown-button-active': ''}`} onClick={toggleOpen} {...props}>
            {children}
        </div>
    )
};
// dropdown button for triggering open
const DropdownInput =({ children, ...props }) => {
    const { setOpen } = useContext(DropdownContext); // get the context
    return (
        <input onFocus={()=>setOpen(true)} {...props}/>
    )
};

const Dropdown = ({children,...props}) => {
    const [open,setOpen] = useState(false)
    const dropdownRef = useRef(0);
  // click listeners for closing dropdown
    useEffect(() => {
        // close dropdown if click outside
        function close(e) {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        // add or remove event listener
        if (open) {
            window.addEventListener("click", close);
        }
        // cleanup
        return function removeListener() {
            window.removeEventListener("click", close);
        }
    }, [open]); // only run if open state changes

    return (
     <DropdownContext.Provider value={{ open, setOpen }} >
        <div {...props} ref={dropdownRef} >
            {children}
        </div>
     </DropdownContext.Provider>
    );
}
// optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Button = DropdownButton;
Dropdown.Container = DropdownContainer;
Dropdown.Item = DropdownItem;
Dropdown.ItemText = DropdownItemText;
Dropdown.ItemIcon = DropdownItemIcon;
Dropdown.Separator = DropdownSeparator;
Dropdown.Input = DropdownInput;
Dropdown.Context = DropdownContext;

export default Dropdown;
