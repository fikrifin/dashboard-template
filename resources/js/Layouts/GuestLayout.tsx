import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            {/* Logo and Title */}
            <div className="w-full max-w-md text-center mb-8">
                <Link href="/" className="inline-block">
                    <ApplicationLogo className="h-16 w-16 fill-current text-indigo-600 dark:text-indigo-400 mx-auto" />
                </Link>
                <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                    Dashboard Template
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Modern dashboard for your projects
                </p>
            </div>

            {/* Auth Card */}
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="px-8 py-10">
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
                    © 2025 Dashboard Template. Built with Laravel & React.
                </p>
            </div>
        </div>
    );
}
