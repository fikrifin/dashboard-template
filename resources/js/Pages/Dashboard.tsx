import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { Card, StatCard, Table } from '@/Components/Dashboard';
import { 
    UsersIcon, 
    CurrencyDollarIcon, 
    ShoppingCartIcon, 
    ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
    // Sample data untuk demo
    const stats = [
        {
            title: 'Total Users',
            value: '1,234',
            icon: UsersIcon,
            iconColor: 'bg-blue-500',
            change: '+12.5%',
            changeType: 'increase' as const,
            subtitle: 'vs last month',
        },
        {
            title: 'Revenue',
            value: '$45,231',
            icon: CurrencyDollarIcon,
            iconColor: 'bg-green-500',
            change: '+8.2%',
            changeType: 'increase' as const,
            subtitle: 'vs last month',
        },
        {
            title: 'Orders',
            value: '892',
            icon: ShoppingCartIcon,
            iconColor: 'bg-purple-500',
            change: '-3.1%',
            changeType: 'decrease' as const,
            subtitle: 'vs last month',
        },
        {
            title: 'Growth',
            value: '23.5%',
            icon: ArrowTrendingUpIcon,
            iconColor: 'bg-orange-500',
            change: '+2.4%',
            changeType: 'increase' as const,
            subtitle: 'vs last month',
        },
    ];

    const recentOrders = [
        { id: '#1234', customer: 'John Doe', amount: '$299', status: 'Completed', date: '2025-10-20' },
        { id: '#1235', customer: 'Jane Smith', amount: '$499', status: 'Pending', date: '2025-10-21' },
        { id: '#1236', customer: 'Bob Johnson', amount: '$199', status: 'Processing', date: '2025-10-22' },
    ];

    const tableColumns = [
        { key: 'id', label: 'Order ID' },
        { key: 'customer', label: 'Customer' },
        { key: 'amount', label: 'Amount' },
        {
            key: 'status',
            label: 'Status',
            render: (value: string) => (
                <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        value === 'Completed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : value === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}
                >
                    {value}
                </span>
            ),
        },
        { key: 'date', label: 'Date' },
    ];

    return (
        <DashboardLayout header="Dashboard Overview">
            <Head title="Dashboard" />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                <Card 
                    title="Recent Activity" 
                    subtitle="Your latest activities"
                    footer={
                        <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                            View all activity →
                        </a>
                    }
                >
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">New order received</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">New user registered</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card 
                    title="Quick Stats" 
                    subtitle="Overview of your performance"
                >
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Sales Target</span>
                                <span className="font-medium text-gray-900 dark:text-white">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Customer Satisfaction</span>
                                <span className="font-medium text-gray-900 dark:text-white">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Task Completion</span>
                                <span className="font-medium text-gray-900 dark:text-white">68%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Recent Orders Table */}
            <Card 
                title="Recent Orders" 
                subtitle="Latest orders from your customers"
                actions={
                    <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                        View All
                    </button>
                }
            >
                <Table columns={tableColumns} data={recentOrders} />
            </Card>
        </DashboardLayout>
    );
}
