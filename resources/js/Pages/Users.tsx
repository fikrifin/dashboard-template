import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { Card, StatCard, Table, Button, Badge, Alert, EmptyState } from '@/Components/Dashboard';
import { 
    UserGroupIcon, 
    PlusIcon 
} from '@heroicons/react/24/outline';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    created_at: string;
}

interface UsersPageProps {
    users: User[];
}

export default function Users({ users = [] }: UsersPageProps) {
    const columns = [
        { 
            key: 'id', 
            label: 'ID',
        },
        { 
            key: 'name', 
            label: 'Name' 
        },
        { 
            key: 'email', 
            label: 'Email' 
        },
        {
            key: 'role',
            label: 'Role',
            render: (value: string) => (
                <Badge variant={value === 'admin' ? 'primary' : 'default'}>
                    {value}
                </Badge>
            ),
        },
        {
            key: 'status',
            label: 'Status',
            render: (value: string) => (
                <Badge 
                    variant={value === 'active' ? 'success' : 'warning'}
                >
                    {value}
                </Badge>
            ),
        },
        { 
            key: 'created_at', 
            label: 'Joined Date' 
        },
    ];

    // Sample data untuk demo
    const sampleUsers = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'admin',
            status: 'active',
            created_at: '2025-01-15',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'user',
            status: 'active',
            created_at: '2025-02-20',
        },
        {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            role: 'user',
            status: 'inactive',
            created_at: '2025-03-10',
        },
    ];

    const displayUsers = users.length > 0 ? users : sampleUsers;

    return (
        <DashboardLayout header="Users Management">
            <Head title="Users" />

            {/* Alert Example */}
            <Alert 
                variant="info" 
                title="Info"
                dismissible
                onDismiss={() => console.log('Alert dismissed')}
            >
                This is a sample users management page. You can add, edit, or delete users from here.
            </Alert>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-6 mb-6">
                <StatCard
                    title="Total Users"
                    value={displayUsers.length}
                    icon={UserGroupIcon}
                    iconColor="bg-blue-500"
                    change="+12%"
                    changeType="increase"
                    subtitle="vs last month"
                />
                <StatCard
                    title="Active Users"
                    value={displayUsers.filter(u => u.status === 'active').length}
                    icon={UserGroupIcon}
                    iconColor="bg-green-500"
                    change="+5%"
                    changeType="increase"
                    subtitle="vs last month"
                />
                <StatCard
                    title="Inactive Users"
                    value={displayUsers.filter(u => u.status === 'inactive').length}
                    icon={UserGroupIcon}
                    iconColor="bg-red-500"
                    change="-2%"
                    changeType="decrease"
                    subtitle="vs last month"
                />
            </div>

            {/* Users Table */}
            <Card
                title="All Users"
                subtitle="Manage your users and their account permissions"
                actions={
                    <Button variant="primary" size="md">
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Add User
                    </Button>
                }
            >
                {displayUsers.length > 0 ? (
                    <Table columns={columns} data={displayUsers} />
                ) : (
                    <EmptyState
                        icon={UserGroupIcon}
                        title="No users found"
                        description="Get started by creating a new user."
                        action={
                            <Button variant="primary">
                                <PlusIcon className="h-5 w-5 mr-2" />
                                Add your first user
                            </Button>
                        }
                    />
                )}
            </Card>
        </DashboardLayout>
    );
}
