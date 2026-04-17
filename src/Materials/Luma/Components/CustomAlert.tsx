import React, { useEffect, useState } from 'react';
import { FiX, FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

interface CustomAlertProps {
    message: string;
    type?: 'info' | 'warning' | 'error' | 'success';
    duration?: number;
    onClose?: () => void;
}

export const showAlert = (message: string, type: 'info' | 'warning' | 'error' | 'success' = 'info', duration = 3000) => {
    const event = new CustomEvent('showAlert', { detail: { message, type, duration } });
    window.dispatchEvent(event);
};

const CustomAlert: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'info' | 'warning' | 'error' | 'success'>('info');
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const handleShowAlert = (event: CustomEvent) => {
            setMessage(event.detail.message);
            setType(event.detail.type);
            setVisible(true);
            setIsLeaving(false);
            
            setTimeout(() => {
                setIsLeaving(true);
                setTimeout(() => {
                    setVisible(false);
                    setIsLeaving(false);
                }, 300);
            }, event.detail.duration || 3000);
        };

        window.addEventListener('showAlert', handleShowAlert as EventListener);
        return () => window.removeEventListener('showAlert', handleShowAlert as EventListener);
    }, []);

    if (!visible) return null;

    const colors = {
        info: 'from-blue-500 to-indigo-600 border-blue-400',
        warning: 'from-yellow-500 to-amber-600 border-yellow-400',
        error: 'from-red-500 to-rose-600 border-red-400',
        success: 'from-green-500 to-emerald-600 border-green-400',
    };

    const icons = {
        info: <FiInfo className="w-5 h-5" />,
        warning: <FiAlertCircle className="w-5 h-5" />,
        error: <FiAlertCircle className="w-5 h-5" />,
        success: <FiCheckCircle className="w-5 h-5" />,
    };

    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
            <div className={`bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px] max-w-md border-l-4 ${isLeaving ? 'animate-slide-up' : 'animate-slide-down'}`}>
                <div className="flex-shrink-0">
                    {icons[type]}
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium">{message}</p>
                </div>
                <button
                    onClick={() => {
                        setIsLeaving(true);
                        setTimeout(() => setVisible(false), 300);
                    }}
                    className="flex-shrink-0 hover:bg-white/20 rounded-lg p-1 transition-colors"
                >
                    <FiX className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;