import DashboardLayout from '@/Layouts/DashboardLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Card } from '@/Components/Dashboard';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <DashboardLayout header="Profile Settings">
            <Head title="Profile" />

            <div className="space-y-6">
                <Card 
                    title="Profile Information" 
                    subtitle="Update your account's profile information and email address"
                >
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </Card>

                <Card 
                    title="Update Password" 
                    subtitle="Ensure your account is using a long, random password to stay secure"
                >
                    <UpdatePasswordForm />
                </Card>

                <Card 
                    title="Delete Account" 
                    subtitle="Permanently delete your account and all associated data"
                >
                    <DeleteUserForm />
                </Card>
            </div>
        </DashboardLayout>
    );
}
