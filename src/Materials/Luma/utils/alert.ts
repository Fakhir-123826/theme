export const showAlert = (message: string, type: 'info' | 'warning' | 'error' | 'success' = 'info') => {
    const event = new CustomEvent('showAlert', { detail: { message, type, duration: 7000 } });
    window.dispatchEvent(event);
};