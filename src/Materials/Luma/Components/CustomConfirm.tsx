// import React, { useState, useEffect } from 'react';
// import { FiX, FiCheck, FiAlertTriangle } from 'react-icons/fi';

// interface ConfirmOptions {
//     title?: string;
//     message: string;
//     confirmText?: string;
//     cancelText?: string;
//     type?: 'info' | 'warning' | 'error' | 'success';
//     onConfirm: () => void;
//     onCancel?: () => void;
// }

// let confirmResolver: ((value: boolean) => void) | null = null;

// export const showConfirm = (options: ConfirmOptions): Promise<boolean> => {
//     // Create event to show confirm dialog
//     const event = new CustomEvent('showConfirm', { detail: options });
//     window.dispatchEvent(event);
    
//     // Return promise that resolves when user clicks confirm/cancel
//     return new Promise((resolve) => {
//         confirmResolver = resolve;
//     });
// };

// const CustomConfirm: React.FC = () => {
//     const [visible, setVisible] = useState(false);
//     const [isLeaving, setIsLeaving] = useState(false);
//     const [options, setOptions] = useState<ConfirmOptions>({
//         title: 'Confirm',
//         message: '',
//         confirmText: 'Confirm',
//         cancelText: 'Cancel',
//         type: 'info',
//         onConfirm: () => {},
//         onCancel: () => {},
//     });

//     useEffect(() => {
//         const handleShowConfirm = (event: CustomEvent) => {
//             setOptions(event.detail);
//             setVisible(true);
//             setIsLeaving(false);
//         };

//         window.addEventListener('showConfirm', handleShowConfirm as EventListener);
//         return () => window.removeEventListener('showConfirm', handleShowConfirm as EventListener);
//     }, []);

//     const handleConfirm = () => {
//         setIsLeaving(true);
//         setTimeout(() => {
//             setVisible(false);
//             options.onConfirm();
//             if (confirmResolver) confirmResolver(true);
//             setIsLeaving(false);
//         }, 300);
//     };

//     const handleCancel = () => {
//         setIsLeaving(true);
//         setTimeout(() => {
//             setVisible(false);
//             if (options.onCancel) options.onCancel();
//             if (confirmResolver) confirmResolver(false);
//             setIsLeaving(false);
//         }, 300);
//     };

//     if (!visible) return null;

//     const colors = {
//         info: {
//             bg: 'from-blue-500 to-indigo-600',
//             icon: 'text-blue-100',
//             button: 'bg-blue-600 hover:bg-blue-700',
//         },
//         warning: {
//             bg: 'from-yellow-500 to-amber-600',
//             icon: 'text-yellow-100',
//             button: 'bg-yellow-600 hover:bg-yellow-700',
//         },
//         error: {
//             bg: 'from-red-500 to-rose-600',
//             icon: 'text-red-100',
//             button: 'bg-red-600 hover:bg-red-700',
//         },
//         success: {
//             bg: 'from-green-500 to-emerald-600',
//             icon: 'text-green-100',
//             button: 'bg-green-600 hover:bg-green-700',
//         },
//     };

//     const icons = {
//         info: <FiAlertTriangle className="w-12 h-12 text-white/80" />,
//         warning: <FiAlertTriangle className="w-12 h-12 text-white/80" />,
//         error: <FiAlertTriangle className="w-12 h-12 text-white/80" />,
//         success: <FiCheck className="w-12 h-12 text-white/80" />,
//     };

//     return (
//         <>
//             {/* Backdrop */}
//             <div 
//                 className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
//                 onClick={handleCancel}
//             />
            
//             {/* Confirm Dialog */}
//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
//                 <div className={`bg-gradient-to-r ${colors[options.type || 'info'].bg} rounded-2xl shadow-2xl w-[400px] max-w-[90vw] overflow-hidden ${isLeaving ? 'animate-scale-down' : 'animate-scale-up'}`}>
//                     {/* Header */}
//                     <div className="flex items-center justify-between p-5 border-b border-white/20">
//                         <div className="flex items-center gap-3">
//                             {icons[options.type || 'info']}
//                             <h3 className="text-xl font-bold text-white">
//                                 {options.title || 'Confirm'}
//                             </h3>
//                         </div>
//                         <button
//                             onClick={handleCancel}
//                             className="text-white/70 hover:text-white transition-colors"
//                         >
//                             <FiX className="w-6 h-6" />
//                         </button>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                         <p className="text-white/90 text-base leading-relaxed">
//                             {options.message}
//                         </p>
//                     </div>

//                     {/* Footer */}
//                     <div className="flex gap-3 p-5 pt-0">
//                         <button
//                             onClick={handleConfirm}
//                             className={`flex-1 ${colors[options.type || 'info'].button} text-white font-semibold py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg`}
//                         >
//                             {options.confirmText || 'Confirm'}
//                         </button>
//                         <button
//                             onClick={handleCancel}
//                             className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 rounded-xl transition-all duration-200"
//                         >
//                             {options.cancelText || 'Cancel'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CustomConfirm;


import React, { useState, useEffect } from 'react';
import { FiX, FiCheck, FiAlertTriangle, FiTrash2 } from 'react-icons/fi';

interface ConfirmOptions {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'info' | 'warning' | 'error' | 'success';
    onConfirm?: () => void;
    onCancel?: () => void;
    resolve?: (value: boolean) => void;  // 👈 Add this
}

let currentResolver: ((value: boolean) => void) | null = null;

export const showConfirm = (options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
        currentResolver = resolve;
        const event = new CustomEvent('showConfirm', { detail: { ...options, resolve } });
        window.dispatchEvent(event);
    });
};

const CustomConfirm: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [options, setOptions] = useState<ConfirmOptions>({
        title: 'Confirm',
        message: '',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        type: 'info',
        onConfirm: () => {},
        onCancel: () => {},
    });

    useEffect(() => {
        const handleShowConfirm = (event: CustomEvent) => {
            setOptions(event.detail);
            setVisible(true);
            setIsLeaving(false);
        };

        window.addEventListener('showConfirm', handleShowConfirm as EventListener);
        return () => window.removeEventListener('showConfirm', handleShowConfirm as EventListener);
    }, []);

    const handleConfirm = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setVisible(false);
            if (options.onConfirm) options.onConfirm();
            if (currentResolver) currentResolver(true);  // 👈 Return true
            setIsLeaving(false);
        }, 300);
    };

    const handleCancel = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setVisible(false);
            if (options.onCancel) options.onCancel();
            if (currentResolver) currentResolver(false);  // 👈 Return false
            setIsLeaving(false);
        }, 300);
    };

    if (!visible) return null;

    // Rest of your component remains the same...
    const colors = {
        info: {
            bg: 'from-blue-500 to-indigo-600',
            button: 'bg-blue-600 hover:bg-blue-700',
            iconBg: 'bg-blue-500/20',
        },
        warning: {
            bg: 'from-orange-500 to-red-500',
            button: 'bg-orange-600 hover:bg-orange-700',
            iconBg: 'bg-orange-500/20',
        },
        error: {
            bg: 'from-red-500 to-rose-600',
            button: 'bg-red-600 hover:bg-red-700',
            iconBg: 'bg-red-500/20',
        },
        success: {
            bg: 'from-green-500 to-emerald-600',
            button: 'bg-green-600 hover:bg-green-700',
            iconBg: 'bg-green-500/20',
        },
    };

    const icons = {
        info: <FiAlertTriangle className="w-8 h-8 text-blue-500" />,
        warning: <FiAlertTriangle className="w-8 h-8 text-orange-500" />,
        error: <FiTrash2 className="w-8 h-8 text-red-500" />,
        success: <FiCheck className="w-8 h-8 text-green-500" />,
    };

    const titles = {
        info: 'Information',
        warning: 'Warning',
        error: 'Delete Confirmation',
        success: 'Success',
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-50 ${isLeaving ? 'animate-fade-out' : 'animate-fade-in'}`}
                onClick={handleCancel}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className={`bg-white rounded-2xl shadow-2xl w-[450px] max-w-[90vw] overflow-hidden ${isLeaving ? 'animate-scale-down' : 'animate-scale-up'}`}>
                    <div className="text-center pt-8 pb-4">
                        <div className={`w-16 h-16 rounded-full ${colors[options.type || 'info'].iconBg} flex items-center justify-center mx-auto mb-4`}>
                            {icons[options.type || 'info']}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            {options.title || titles[options.type || 'info']}
                        </h3>
                    </div>
                    <div className="px-8 pb-6">
                        <p className="text-gray-600 text-center leading-relaxed">
                            {options.message}
                        </p>
                    </div>
                    <div className="flex gap-3 p-6 pt-0">
                        <button
                            onClick={handleConfirm}
                            className={`flex-1 ${colors[options.type || 'info'].button} text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg`}
                        >
                            {options.confirmText || 'Confirm'}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-200"
                        >
                            {options.cancelText || 'Cancel'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomConfirm;