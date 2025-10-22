import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: any;
    iconColor?: string;
    change?: string;
    changeType?: 'increase' | 'decrease' | 'neutral';
    subtitle?: string;
}

export default function StatCard({ 
    title, 
    value, 
    icon: Icon, 
    iconColor = 'bg-indigo-500', 
    change, 
    changeType = 'neutral',
    subtitle 
}: StatCardProps) {
    const changeColors = {
        increase: 'text-green-600 dark:text-green-400',
        decrease: 'text-red-600 dark:text-red-400',
        neutral: 'text-gray-600 dark:text-gray-400',
    };

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
            <div className="p-6">
                <div className="flex items-center">
                    <div className={`flex-shrink-0 rounded-md p-3 ${iconColor}`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                {title}
                            </dt>
                            <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {value}
                                </div>
                                {change && (
                                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${changeColors[changeType]}`}>
                                        {change}
                                    </div>
                                )}
                            </dd>
                            {subtitle && (
                                <dd className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {subtitle}
                                </dd>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
