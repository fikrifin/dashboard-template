import { PropsWithChildren, ReactNode, useState, Fragment, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { User } from '@/types';
import {
    HomeIcon,
    ChartBarIcon,
    UsersIcon,
    CogIcon,
    Bars3Icon,
    XMarkIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
    UserCircleIcon,
    ChevronDownIcon,
    SunIcon,
    MoonIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';

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
    const [darkMode, setDarkMode] = useState(false);

    // Sample notifications - in real app, this would come from props or API
    const notifications = [
        {
            id: 1,
            title: 'New user registered',
            message: 'John Doe just signed up for an account',
            time: '5 minutes ago',
            read: false,
            type: 'user',
        },
        {
            id: 2,
            title: 'System update',
            message: 'Dashboard has been updated to version 2.0',
            time: '1 hour ago',
            read: false,
            type: 'system',
        },
        {
            id: 3,
            title: 'New comment',
            message: 'Jane Smith commented on your post',
            time: '2 hours ago',
            read: true,
            type: 'comment',
        },
    ];

    const unreadCount = notifications.filter(n => !n.read).length;

    // Initialize dark mode from localStorage
    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true' || 
                      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', String(newDarkMode));
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navigation: MenuItem[] = [
        { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon },
        { name: 'Users', href: route('users.index'), icon: UsersIcon },
        { name: 'Components', href: route('components.index'), icon: SwatchIcon },
        { name: 'Charts', href: route('charts.index'), icon: ChartBarIcon },
        { name: 'Settings', href: route('settings.index'), icon: CogIcon },
    ];

    const isCurrentRoute = (href: string) => {
        if (href === '#') return false;
        return route().current(href.replace(window.location.origin, ''));
    };

    const handleLogout = () => {
        router.post(route('logout'));
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
                    {/* Logout button in mobile sidebar */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                        <button
                            onClick={handleLogout}
                            className="group flex w-full items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 h-6 w-6 flex-shrink-0" />
                            Logout
                        </button>
                    </div>
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
                    {/* Logout button in desktop sidebar */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                        <button
                            onClick={handleLogout}
                            className="group flex w-full items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 h-6 w-6 flex-shrink-0" />
                            Logout
                        </button>
                    </div>
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
                            <button 
                                onClick={toggleDarkMode}
                                className="rounded-full p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {darkMode ? (
                                    <SunIcon className="h-6 w-6" />
                                ) : (
                                    <MoonIcon className="h-6 w-6" />
                                )}
                            </button>
                            
                            {/* Notification dropdown */}
                            <Menu as="div" className="relative">
                                <Menu.Button className="relative rounded-full p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                                    <BellIcon className="h-6 w-6" />
                                    {unreadCount > 0 && (
                                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                                    )}
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700">
                                        <div className="py-1">
                                            {/* Header */}
                                            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                        Notifications
                                                    </h3>
                                                    {unreadCount > 0 && (
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                                            {unreadCount} new
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Notifications list */}
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.length > 0 ? (
                                                    notifications.map((notification) => (
                                                        <Menu.Item key={notification.id}>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={`${
                                                                        active ? 'bg-gray-50 dark:bg-gray-700' : ''
                                                                    } ${
                                                                        !notification.read ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                                                                    } block px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0`}
                                                                >
                                                                    <div className="flex items-start">
                                                                        <div className="flex-shrink-0">
                                                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                                                                notification.type === 'user' ? 'bg-blue-100 dark:bg-blue-900' :
                                                                                notification.type === 'system' ? 'bg-green-100 dark:bg-green-900' :
                                                                                'bg-purple-100 dark:bg-purple-900'
                                                                            }`}>
                                                                                <span className={`text-sm font-medium ${
                                                                                    notification.type === 'user' ? 'text-blue-600 dark:text-blue-400' :
                                                                                    notification.type === 'system' ? 'text-green-600 dark:text-green-400' :
                                                                                    'text-purple-600 dark:text-purple-400'
                                                                                }`}>
                                                                                    {notification.type === 'user' ? '👤' :
                                                                                     notification.type === 'system' ? '⚙️' : '💬'}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ml-3 flex-1">
                                                                            <p className={`text-sm font-medium ${
                                                                                !notification.read 
                                                                                    ? 'text-gray-900 dark:text-white' 
                                                                                    : 'text-gray-700 dark:text-gray-300'
                                                                            }`}>
                                                                                {notification.title}
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                                                {notification.message}
                                                                            </p>
                                                                            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                                                                {notification.time}
                                                                            </p>
                                                                        </div>
                                                                        {!notification.read && (
                                                                            <div className="flex-shrink-0 ml-2">
                                                                                <span className="block h-2 w-2 rounded-full bg-indigo-600"></span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-8 text-center">
                                                        <BellIcon className="mx-auto h-12 w-12 text-gray-400" />
                                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                            No notifications yet
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Footer */}
                                            {notifications.length > 0 && (
                                                <div className="border-t border-gray-200 dark:border-gray-700">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-center text-sm text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        View all notifications
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <Menu.Button className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 hidden md:block">{user.name}</span>
                                    <ChevronDownIcon className="h-4 w-4 text-gray-400 hidden md:block" />
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700">
                                        <div className="py-1">
                                            {/* User info header */}
                                            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {user.name}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                    {user.email}
                                                </p>
                                            </div>

                                            {/* Menu items */}
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route('profile.edit')}
                                                            className={`${
                                                                active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                                            } flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                                                        >
                                                            <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400" />
                                                            Edit Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={handleLogout}
                                                            className={`${
                                                                active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                                            } flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                                                        >
                                                            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                                                            Logout
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
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
