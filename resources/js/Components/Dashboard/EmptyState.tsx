import { ReactNode } from 'react';

interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: any;
    action?: ReactNode;
}

export default function EmptyState({ title, description, icon: Icon, action }: EmptyStateProps) {
    return (
        <div className="text-center py-12">
            {Icon && (
                <Icon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
            )}
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
            {description && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            )}
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}
