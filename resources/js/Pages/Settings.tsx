import { FormEventHandler } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, useForm } from '@inertiajs/react';
import { Card, Button, Input, Select, Textarea, Alert } from '@/Components/Dashboard';

export default function Settings() {
    const { data, setData, post, processing, errors, reset } = useForm({
        site_name: 'My Dashboard',
        site_email: 'admin@example.com',
        site_description: 'A modern dashboard template',
        notifications_enabled: 'yes',
        timezone: 'Asia/Jakarta',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        // Simulate form submission
        console.log('Form data:', data);
        
        // In real app, you would do:
        // post(route('settings.update'));
    };

    return (
        <DashboardLayout header="Settings">
            <Head title="Settings" />

            <Alert variant="info" title="Demo Mode">
                This is a demo page. Form submission is disabled.
            </Alert>

            <div className="mt-6 space-y-6">
                {/* General Settings */}
                <Card title="General Settings" subtitle="Manage your application settings">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Input
                                label="Site Name"
                                type="text"
                                value={data.site_name}
                                onChange={(e) => setData('site_name', e.target.value)}
                                error={errors.site_name}
                                required
                            />

                            <Input
                                label="Email Address"
                                type="email"
                                value={data.site_email}
                                onChange={(e) => setData('site_email', e.target.value)}
                                error={errors.site_email}
                                helperText="This email will be used for notifications"
                                required
                            />
                        </div>

                        <Textarea
                            label="Site Description"
                            value={data.site_description}
                            onChange={(e) => setData('site_description', e.target.value)}
                            error={errors.site_description}
                            rows={4}
                            helperText="Brief description of your site"
                        />

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Select
                                label="Enable Notifications"
                                value={data.notifications_enabled}
                                onChange={(e) => setData('notifications_enabled', e.target.value)}
                                error={errors.notifications_enabled}
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>

                            <Select
                                label="Timezone"
                                value={data.timezone}
                                onChange={(e) => setData('timezone', e.target.value)}
                                error={errors.timezone}
                            >
                                <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                                <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                                <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                                <option value="America/New_York">America/New York (EST)</option>
                                <option value="Europe/London">Europe/London (GMT)</option>
                            </Select>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => reset()}
                            >
                                Reset
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                disabled={processing}
                            >
                                {processing ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </Card>

                {/* Security Settings */}
                <Card title="Security Settings" subtitle="Manage your account security">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                    Two-Factor Authentication
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Add an extra layer of security to your account
                                </p>
                            </div>
                            <Button variant="primary" size="sm">
                                Enable
                            </Button>
                        </div>
                        
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                        Change Password
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Update your password regularly for better security
                                    </p>
                                </div>
                                <Button variant="secondary" size="sm">
                                    Change
                                </Button>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                        Active Sessions
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Manage and logout your active sessions on other devices
                                    </p>
                                </div>
                                <Button variant="secondary" size="sm">
                                    Manage
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Danger Zone */}
                <Card title="Danger Zone" subtitle="Irreversible actions">
                    <div className="space-y-4">
                        <Alert variant="warning" title="Warning">
                            The following actions are permanent and cannot be undone.
                        </Alert>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                    Delete Account
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Permanently delete your account and all associated data
                                </p>
                            </div>
                            <Button variant="danger" size="sm">
                                Delete Account
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
