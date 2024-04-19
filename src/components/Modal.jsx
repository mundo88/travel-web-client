import React, {  useEffect} from 'react';

const Modal = ({show,onClose,children}) => {
    useEffect(() => {
		function close(event) {
			if (event.keyCode === 27) {
				onClose();
			}
		}
        if (show) {
            document.body.classList.add('overflow-hidden')
            window.addEventListener("keydown", close);
        }
        return function removeListener() {
            window.removeEventListener("keydown", close);
            document.body.classList.remove('overflow-hidden')
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]); 
    return (
        <div className={`w-screen h-screen fixed top-0 left-0 z-50 ${show ? 'animate-fade animate-duration-300':''} duration-150`}>
            <div className='modal-overlay w-full h-full bg-black/80' onClick={onClose}>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:w-auto md:h-auto w-full h-full">
                {children}
            </div>
        </div>
    );
}

export default Modal;
