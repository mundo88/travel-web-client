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
const DropdownContainer =({ children ,...props})=> {
    const { open } = useContext(DropdownContext); // get the context
    const postion = {
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
            <div className={`absolute max-w-xs w-56 p-2 ${props.postion ? postion[props.postion]:postion['top-center']} bg-gray-800 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] right-0 z-50 ${props.className && props.className}`} >
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
        <hr className='w-full border-gray-700 border-0.5 my-1'/>
    )
}
const DropdownItemIcon = ({children}) => {
    return (
        <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 mr-3 overflow-hidden '>
            {children}
        </span>
    )
}
const DropdownItem = ({to,onClick, children, ...props }) => {
  return (
    <Link to={to} onClick={onClick} className="flex items-center px-3 py-1.5 text-sm text-gray-100 capitalize transition-colors duration-150 transform hover:bg-gray-600">
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
      console.log(open);
    }
    return (
        <div className={`cursor-pointer group ${open ? 'dropdown-button-active': ''}`} onClick={toggleOpen} {...props}>
            {children}
        </div>
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
     <DropdownContext.Provider value={{ open, setOpen }}>
        <div {...props} ref={dropdownRef} className="relative">
            {children}
        </div>
     </DropdownContext.Provider>
    );
}
// optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Button = DropdownButton;
Dropdown.DropdownContainer = DropdownContainer;
Dropdown.Item = DropdownItem;
Dropdown.ItemText = DropdownItemText;
Dropdown.ItemIcon = DropdownItemIcon;
Dropdown.Separator = DropdownSeparator;

export default Dropdown;
