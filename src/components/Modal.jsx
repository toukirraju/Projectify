import React, { useEffect, useState } from 'react';

const Modal = ({ open, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match the duration of the transition
            return () => clearTimeout(timer);
        }
    }, [open]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed overflow-hidden top-0 left-0 w-full flex min-h-screen items-center justify-center text-white transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => onClose()}
        >
            {/* container  */}
            <div
                className={`w-full max-w-md rounded-lg bg-gray-800 shadow-xl transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
