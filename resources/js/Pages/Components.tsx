import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { Card, StatCard, Table, Button, Input, Select, Textarea, Badge, Alert, EmptyState } from '@/Components/Dashboard';
import { useState } from 'react';
import {
    UserIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';

export default function Components() {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [selectValue, setSelectValue] = useState('option1');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);

    // Sample data for table
    const tableColumns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'status', label: 'Status', render: (value: string) => (
            <Badge variant={value === 'active' ? 'success' : 'warning'}>
                {value}
            </Badge>
        )},
    ];

    const tableData = [
        { id: 1, name: 'Item 1', status: 'active' },
        { id: 2, name: 'Item 2', status: 'inactive' },
        { id: 3, name: 'Item 3', status: 'active' },
    ];

    return (
        <DashboardLayout header="UI Components">
            <Head title="Components" />

            <div className="space-y-6">
                {/* Introduction */}
                <Card title="Component Library" subtitle="Reusable UI components for your dashboard">
                    <p className="text-gray-600 dark:text-gray-400">
                        This page showcases all available UI components in this dashboard template. 
                        You can use these components as reference for building your own pages.
                    </p>
                </Card>

                {/* Buttons Section */}
                <Card title="Buttons" subtitle="Various button styles and variants">
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="danger">Danger Button</Button>
                        <Button variant="success">Success Button</Button>
                        <Button variant="primary" disabled>Disabled Button</Button>
                        <Button variant="primary" size="sm">Small Button</Button>
                        <Button variant="primary" size="lg">Large Button</Button>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<Button variant="primary">Primary Button</Button>`}
                        </code>
                    </div>
                </Card>

                {/* Badges Section */}
                <Card title="Badges" subtitle="Status badges and labels">
                    <div className="flex flex-wrap gap-3">
                        <Badge>Default</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="info">Info</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="danger">Danger</Badge>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<Badge variant="success">Success</Badge>`}
                        </code>
                    </div>
                </Card>

                {/* Alerts Section */}
                <Card title="Alerts" subtitle="Alert messages for different scenarios">
                                        <div className="space-y-3">
                        <Alert variant="success" title="Success">
                            This is a success alert message.
                        </Alert>
                        <Alert variant="error" title="Error">
                            This is an error alert message.
                        </Alert>
                        <Alert variant="warning" title="Warning">
                            This is a warning alert message.
                        </Alert>
                        <Alert variant="info" title="Info">
                            This is an info alert message.
                        </Alert>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<Alert type="success" title="Success!">Message here</Alert>`}
                        </code>
                    </div>
                </Card>

                {/* Stat Cards Section */}
                <Card title="Stat Cards" subtitle="Display statistics with icons">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard
                            title="Total Users"
                            value="1,234"
                            icon={UserIcon}
                            iconColor="bg-blue-500"
                            change="+12.5%"
                            changeType="increase"
                            subtitle="vs last month"
                        />
                        <StatCard
                            title="Revenue"
                            value="$45,231"
                            icon={CurrencyDollarIcon}
                            iconColor="bg-green-500"
                            change="+8.2%"
                            changeType="increase"
                            subtitle="vs last month"
                        />
                        <StatCard
                            title="Growth"
                            value="23.5%"
                            icon={ChartBarIcon}
                            iconColor="bg-purple-500"
                            change="-3.1%"
                            changeType="decrease"
                            subtitle="vs last month"
                        />
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<StatCard title="Total Users" value="1,234" icon={UserIcon} ... />`}
                        </code>
                    </div>
                </Card>

                {/* Form Elements */}
                <Card title="Form Elements" subtitle="Input fields and form controls">
                    <div className="space-y-6">
                        {/* Text Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Text Input
                            </label>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Enter some text..."
                            />
                        </div>

                        {/* Select Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Select Dropdown
                            </label>
                            <Select
                                value={selectValue}
                                onChange={(e) => setSelectValue(e.target.value)}
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </div>

                        {/* Textarea */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Textarea
                            </label>
                            <Textarea
                                value={textareaValue}
                                onChange={(e) => setTextareaValue(e.target.value)}
                                placeholder="Enter multiple lines of text..."
                                rows={4}
                            />
                        </div>

                        {/* Checkbox */}
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkboxChecked}
                                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                                />
                                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                    I agree to the terms and conditions
                                </span>
                            </label>
                        </div>

                        {/* Radio Buttons */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Radio Buttons
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="option1"
                                        checked={radioValue === 'option1'}
                                        onChange={(e) => setRadioValue(e.target.value)}
                                        className="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                        Option 1
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="option2"
                                        checked={radioValue === 'option2'}
                                        onChange={(e) => setRadioValue(e.target.value)}
                                        className="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                        Option 2
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="option3"
                                        checked={radioValue === 'option3'}
                                        onChange={(e) => setRadioValue(e.target.value)}
                                        className="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                        Option 3
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <div>
                            <label className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Toggle Switch
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setSwitchEnabled(!switchEnabled)}
                                    className={`${
                                        switchEnabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                >
                                    <span
                                        className={`${
                                            switchEnabled ? 'translate-x-5' : 'translate-x-0'
                                        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                                    />
                                </button>
                            </label>
                        </div>

                        {/* Range Slider */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Range Slider: {sliderValue}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Table Section */}
                <Card title="Table" subtitle="Data table with custom rendering">
                    <Table columns={tableColumns} data={tableData} />
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<Table columns={columns} data={data} />`}
                        </code>
                    </div>
                </Card>

                {/* Empty State Section */}
                <Card title="Empty State" subtitle="Display when there's no data">
                    <EmptyState
                        title="No data found"
                        description="There are no items to display at the moment."
                    />
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                            {`<EmptyState title="No data" description="..." />`}
                        </code>
                    </div>
                </Card>

                {/* Cards Variations */}
                <Card title="Card Variations" subtitle="Different card layouts">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card title="Simple Card">
                            <p className="text-gray-600 dark:text-gray-400">
                                This is a simple card with just a title and content.
                            </p>
                        </Card>
                        <Card 
                            title="Card with Subtitle" 
                            subtitle="This is a subtitle"
                        >
                            <p className="text-gray-600 dark:text-gray-400">
                                Card content goes here.
                            </p>
                        </Card>
                        <Card 
                            title="Card with Actions" 
                            actions={
                                <Button variant="primary" size="sm">
                                    Action
                                </Button>
                            }
                        >
                            <p className="text-gray-600 dark:text-gray-400">
                                This card has an action button in the header.
                            </p>
                        </Card>
                        <Card 
                            title="Card with Footer" 
                            footer={
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Last updated: 2 hours ago
                                </div>
                            }
                        >
                            <p className="text-gray-600 dark:text-gray-400">
                                This card has a footer section.
                            </p>
                        </Card>
                    </div>
                </Card>

                {/* Progress Bars */}
                <Card title="Progress Bars" subtitle="Show progress and loading states">
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Progress 25%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Progress 50%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Progress 75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Progress 100%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Color Reference */}
                <Card title="Color Palette" subtitle="Theme colors used in the dashboard">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="h-20 bg-indigo-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Primary</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">indigo-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-gray-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Secondary</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">gray-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-green-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Success</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">green-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-yellow-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Warning</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">yellow-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-red-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Danger</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">red-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-blue-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Info</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">blue-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-purple-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Purple</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">purple-500</p>
                        </div>
                        <div>
                            <div className="h-20 bg-pink-500 rounded-lg mb-2"></div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Pink</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">pink-500</p>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
