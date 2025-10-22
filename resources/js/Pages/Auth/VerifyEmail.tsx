import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            {/* Page Title */}
            <div className="mb-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4">
                    <EnvelopeIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Verify your email
                </h2>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Thanks for signing up! Before getting started, please verify your email address by clicking on the link we just sent you. If you didn't receive the email, we'll gladly send you another.
                </p>
            </div>

            {/* Success Message */}
            {status === 'verification-link-sent' && (
                <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4">
                    <div className="flex">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            A new verification link has been sent to your email address!
                        </p>
                    </div>
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
                {/* Resend Button */}
                <div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {processing ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Resend Verification Email'
                        )}
                    </button>
                </div>

                {/* Logout Link */}
                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                    >
                        Log out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
