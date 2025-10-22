import { ReactNode } from 'react';

interface CardProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    footer?: ReactNode;
    actions?: ReactNode;
}

export default function Card({ title, subtitle, children, className = '', footer, actions }: CardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg ${className}`}>
            {(title || actions) && (
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            {title && (
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                            )}
                            {subtitle && (
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
                            )}
                        </div>
                        {actions && <div className="flex items-center space-x-2">{actions}</div>}
                    </div>
                </div>
            )}
            <div className="px-6 py-4">{children}</div>
            {footer && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    );
}
