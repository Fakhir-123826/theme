// interface ConfirmOptions {
//     title?: string;
//     message: string;
//     confirmText?: string;
//     cancelText?: string;
//     type?: 'info' | 'warning' | 'error' | 'success';
// }

// export const showConfirm = (options: ConfirmOptions): Promise<boolean> => {
//     const event = new CustomEvent('showConfirm', { detail: options });
//     window.dispatchEvent(event);
    
//     return new Promise((resolve) => {
//         const handleResponse = (e: CustomEvent) => {
//             resolve(e.detail);
//             window.removeEventListener('confirmResponse', handleResponse as EventListener);
//         };
//         window.addEventListener('confirmResponse', handleResponse as EventListener);
//     });
// };


interface ConfirmOptions {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'info' | 'warning' | 'error' | 'success';
}

export const showConfirm = (options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
        const event = new CustomEvent('showConfirm', { 
            detail: { ...options, resolve } 
        });
        window.dispatchEvent(event);
    });
};