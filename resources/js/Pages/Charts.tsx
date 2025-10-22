import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/Dashboard/Card';
import LineChart from '@/Components/Dashboard/Charts/LineChart';
import BarChart from '@/Components/Dashboard/Charts/BarChart';
import PieChart from '@/Components/Dashboard/Charts/PieChart';
import DonutChart from '@/Components/Dashboard/Charts/DonutChart';
import AreaChart from '@/Components/Dashboard/Charts/AreaChart';
import Sparkline from '@/Components/Dashboard/Charts/Sparkline';
import { 
    ArrowUpIcon, 
    ArrowDownIcon,
    ChartBarIcon 
} from '@heroicons/react/24/outline';

export default function Charts() {
    // Sample data for charts
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [4500, 5200, 4800, 6100, 5900, 6800],
    };

    const weeklyData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [120, 150, 180, 140, 200, 170, 160],
    };

    const categoryData = [
        { label: 'Electronics', value: 35, color: '#6366f1' },
        { label: 'Clothing', value: 25, color: '#8b5cf6' },
        { label: 'Food', value: 20, color: '#ec4899' },
        { label: 'Books', value: 12, color: '#f59e0b' },
        { label: 'Other', value: 8, color: '#10b981' },
    ];

    const trafficSourceData = [
        { label: 'Direct', value: 4200, color: '#6366f1' },
        { label: 'Social Media', value: 3100, color: '#8b5cf6' },
        { label: 'Search', value: 2800, color: '#ec4899' },
        { label: 'Referral', value: 1500, color: '#f59e0b' },
    ];

    const multiLineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                values: [4500, 5200, 4800, 6100, 5900, 6800],
                color: '#6366f1',
            },
            {
                label: 'Expenses',
                values: [3200, 3800, 3500, 4200, 4000, 4500],
                color: '#ec4899',
            },
        ],
    };

    const sparklineData1 = [20, 35, 30, 45, 40, 50, 48, 60, 55, 65];
    const sparklineData2 = [65, 60, 58, 50, 55, 48, 45, 40, 42, 38];
    const sparklineData3 = [30, 32, 35, 33, 38, 40, 42, 41, 45, 48];

    return (
        <DashboardLayout>
            <Head title="Charts & Analytics" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Charts & Analytics
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            A collection of chart and analytics components for data visualization
                        </p>
                    </div>

                    {/* Introduction */}
                    <Card className="mb-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                <ChartBarIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Data Visualization Components
                                </h2>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    This page showcases various chart and analytics components built with pure SVG.
                                    All charts are responsive, support dark mode, and can be easily customized with different colors and data.
                                    No external charting libraries required!
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Line Chart */}
                        <Card title="Line Chart" subtitle="Track trends over time">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <LineChart
                                    data={monthlyData}
                                    title="Monthly Revenue"
                                    color="#6366f1"
                                    height={250}
                                />
                                <LineChart
                                    data={weeklyData}
                                    title="Weekly Activity"
                                    color="#10b981"
                                    height={250}
                                />
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<LineChart
  data={{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [4500, 5200, 4800, 6100, 5900, 6800]
  }}
  title="Monthly Revenue"
  color="#6366f1"
  height={250}
/>`}
                                </code>
                            </div>
                        </Card>

                        {/* Bar Chart */}
                        <Card title="Bar Chart" subtitle="Compare values across categories">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <BarChart
                                    data={weeklyData}
                                    title="Weekly Sales"
                                    color="#8b5cf6"
                                    height={250}
                                />
                                <BarChart
                                    data={monthlyData}
                                    title="Monthly Performance"
                                    color="#f59e0b"
                                    height={250}
                                />
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<BarChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [120, 150, 180, 140, 200, 170, 160]
  }}
  title="Weekly Sales"
  color="#8b5cf6"
  height={250}
/>`}
                                </code>
                            </div>
                        </Card>

                        {/* Pie & Donut Charts */}
                        <Card title="Pie & Donut Charts" subtitle="Show proportional data distribution">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <PieChart
                                    data={categoryData}
                                    title="Sales by Category"
                                    size={220}
                                />
                                <DonutChart
                                    data={trafficSourceData}
                                    title="Traffic Sources"
                                    size={220}
                                    centerText="11.6K"
                                    centerSubtext="Total Visits"
                                />
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<DonutChart
  data={[
    { label: 'Direct', value: 4200, color: '#6366f1' },
    { label: 'Social Media', value: 3100, color: '#8b5cf6' }
  ]}
  title="Traffic Sources"
  centerText="11.6K"
  centerSubtext="Total Visits"
/>`}
                                </code>
                            </div>
                        </Card>

                        {/* Area Chart */}
                        <Card title="Area Chart" subtitle="Compare multiple datasets with filled areas">
                            <AreaChart
                                data={multiLineData}
                                title="Revenue vs Expenses"
                                height={280}
                            />
                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<AreaChart
  data={{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        values: [4500, 5200, 4800, 6100, 5900, 6800],
        color: '#6366f1'
      },
      {
        label: 'Expenses',
        values: [3200, 3800, 3500, 4200, 4000, 4500],
        color: '#ec4899'
      }
    ]
  }}
  height={280}
/>`}
                                </code>
                            </div>
                        </Card>

                        {/* Sparklines */}
                        <Card title="Sparklines" subtitle="Compact inline charts for quick insights">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Page Views
                                        </span>
                                        <span className="flex items-center text-xs text-green-600 dark:text-green-400">
                                            <ArrowUpIcon className="w-3 h-3 mr-1" />
                                            12%
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        45.2K
                                    </div>
                                    <Sparkline data={sparklineData1} color="#10b981" height={40} />
                                </div>

                                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Bounce Rate
                                        </span>
                                        <span className="flex items-center text-xs text-red-600 dark:text-red-400">
                                            <ArrowDownIcon className="w-3 h-3 mr-1" />
                                            8%
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        32.5%
                                    </div>
                                    <Sparkline data={sparklineData2} color="#ef4444" height={40} />
                                </div>

                                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Avg. Session
                                        </span>
                                        <span className="flex items-center text-xs text-green-600 dark:text-green-400">
                                            <ArrowUpIcon className="w-3 h-3 mr-1" />
                                            5%
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        2m 34s
                                    </div>
                                    <Sparkline data={sparklineData3} color="#6366f1" height={40} />
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Sparkline 
  data={[20, 35, 30, 45, 40, 50, 48, 60, 55, 65]} 
  color="#10b981" 
  height={40} 
/>`}
                                </code>
                            </div>
                        </Card>

                        {/* Analytics Cards */}
                        <Card title="Analytics Cards" subtitle="Combine stats with mini charts">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                                    <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                                        Total Revenue
                                    </div>
                                    <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
                                        $54,239
                                    </div>
                                    <Sparkline 
                                        data={[30, 35, 40, 38, 42, 48, 50, 55, 58, 60]} 
                                        color="#6366f1" 
                                        height={40}
                                        showDots
                                    />
                                </div>

                                <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                                        New Customers
                                    </div>
                                    <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">
                                        2,842
                                    </div>
                                    <Sparkline 
                                        data={[40, 42, 45, 48, 50, 52, 55, 58, 62, 65]} 
                                        color="#10b981" 
                                        height={40}
                                        showDots
                                    />
                                </div>

                                <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                    <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">
                                        Orders
                                    </div>
                                    <div className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                                        3,721
                                    </div>
                                    <Sparkline 
                                        data={[50, 48, 52, 50, 55, 58, 60, 62, 65, 68]} 
                                        color="#f59e0b" 
                                        height={40}
                                        showDots
                                    />
                                </div>

                                <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 rounded-lg border border-rose-200 dark:border-rose-800">
                                    <div className="text-sm text-rose-600 dark:text-rose-400 font-medium mb-1">
                                        Conversion Rate
                                    </div>
                                    <div className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">
                                        12.8%
                                    </div>
                                    <Sparkline 
                                        data={[35, 38, 40, 42, 45, 43, 46, 48, 50, 52]} 
                                        color="#ec4899" 
                                        height={40}
                                        showDots
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
