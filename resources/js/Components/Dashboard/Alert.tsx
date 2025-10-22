import { ReactNode } from 'react';
import { 
    CheckCircleIcon, 
    ExclamationCircleIcon, 
    InformationCircleIcon, 
    XCircleIcon 
} from '@heroicons/react/24/outline';

interface AlertProps {
    children: ReactNode;
    variant?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
}

export default function Alert({
    children,
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
}: AlertProps) {
    const variants = {
        success: {
            container: 'bg-green-50 border-green-400 dark:bg-green-900/20 dark:border-green-700',
            icon: CheckCircleIcon,
            iconColor: 'text-green-400 dark:text-green-500',
            title: 'text-green-800 dark:text-green-200',
            text: 'text-green-700 dark:text-green-300',
        },
        error: {
            container: 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-700',
            icon: XCircleIcon,
            iconColor: 'text-red-400 dark:text-red-500',
            title: 'text-red-800 dark:text-red-200',
            text: 'text-red-700 dark:text-red-300',
        },
        warning: {
            container: 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-700',
            icon: ExclamationCircleIcon,
            iconColor: 'text-yellow-400 dark:text-yellow-500',
            title: 'text-yellow-800 dark:text-yellow-200',
            text: 'text-yellow-700 dark:text-yellow-300',
        },
        info: {
            container: 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-700',
            icon: InformationCircleIcon,
            iconColor: 'text-blue-400 dark:text-blue-500',
            title: 'text-blue-800 dark:text-blue-200',
            text: 'text-blue-700 dark:text-blue-300',
        },
    };

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <div className={`border-l-4 p-4 ${config.container}`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <Icon className={`h-5 w-5 ${config.iconColor}`} />
                </div>
                <div className="ml-3 flex-1">
                    {title && (
                        <h3 className={`text-sm font-medium ${config.title}`}>{title}</h3>
                    )}
                    <div className={`text-sm ${config.text} ${title ? 'mt-2' : ''}`}>
                        {children}
                    </div>
                </div>
                {dismissible && onDismiss && (
                    <div className="ml-auto pl-3">
                        <button
                            onClick={onDismiss}
                            className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${config.iconColor}`}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XCircleIcon className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
