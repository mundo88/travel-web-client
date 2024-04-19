import React from 'react';
import toast from 'react-hot-toast';

const CustomToast = ({t,msg}) => {
    return (
        <div
      className={`${
        t.visible ? 'animate-fade-down animate-duration-200' : 'opacity-0 duration-300'
      } max-w-md w-full bg-teal-800 border-teal-700 border shadow-lg g pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className=" text-lg font-semibold text-gray-200">
                {msg}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-teal-700">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent p-4 flex items-center justify-center text-sm font-medium text-teal-300 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200"
        >
          Close
        </button>
      </div>
    </div>
    );
}

export default CustomToast;

