import { PropsWithChildren, ReactNode, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { User } from '@/types';
import {
    HomeIcon,
    ChartBarIcon,
    UsersIcon,
    CogIcon,
    Bars3Icon,
    XMarkIcon,
    BellIcon,
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
    header?: ReactNode;
    children: ReactNode;
}

interface MenuItem {
    name: string;
    href: string;
    icon: any;
    current?: boolean;
}

export default function DashboardLayout({ header, children }: PropsWithChildren<DashboardLayoutProps>) {
    const user = usePage().props.auth.user as User;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation: MenuItem[] = [
        { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon },
        { name: 'Users', href: route('users.index'), icon: UsersIcon },
        { name: 'Analytics', href: '#', icon: ChartBarIcon },
        { name: 'Settings', href: route('settings.index'), icon: CogIcon },
    ];

    const isCurrentRoute = (href: string) => {
        if (href === '#') return false;
        return route().current(href.replace(window.location.origin, ''));
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
                <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white dark:bg-gray-800 shadow-xl">
                    <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</span>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                    isCurrentRoute(item.href)
                                        ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex flex-col flex-grow bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
                    <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</span>
                    </div>
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                    isCurrentRoute(item.href)
                                        ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-64 flex flex-col flex-1">
                {/* Top navbar */}
                <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-800 shadow">
                    <button
                        type="button"
                        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                    <div className="flex flex-1 justify-between px-4">
                        <div className="flex flex-1 items-center">
                            {header && (
                                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{header}</h1>
                            )}
                        </div>
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                            <button className="rounded-full p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <BellIcon className="h-6 w-6" />
                            </button>
                            <div className="relative">
                                <Link
                                    href={route('profile.edit')}
                                    className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}
