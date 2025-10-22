import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/Dashboard/Card';
import { useState } from 'react';
import { SparklesIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export default function Icons() {
    const [searchQuery, setSearchQuery] = useState('');
    const [iconStyle, setIconStyle] = useState<'outline' | 'solid'>('outline');
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    // Get all icon names from the imported modules
    const outlineIconNames = Object.keys(OutlineIcons).filter(name => name !== 'default');
    const solidIconNames = Object.keys(SolidIcons).filter(name => name !== 'default');
    
    const iconNames = iconStyle === 'outline' ? outlineIconNames : solidIconNames;
    const IconSet = iconStyle === 'outline' ? OutlineIcons : SolidIcons;

    // Filter icons based on search query
    const filteredIcons = iconNames.filter(name =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const copyToClipboard = (iconName: string) => {
        const importStatement = iconStyle === 'outline' 
            ? `import { ${iconName} } from '@heroicons/react/24/outline';`
            : `import { ${iconName} } from '@heroicons/react/24/solid';`;
        
        navigator.clipboard.writeText(importStatement);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
    };

    return (
        <DashboardLayout>
            <Head title="Icons" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Icons Library
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Browse and copy Heroicons for use in your dashboard
                        </p>
                    </div>

                    {/* Introduction */}
                    <Card className="mb-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                <SparklesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Heroicons Library
                                </h2>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    This dashboard uses Heroicons - a set of free MIT-licensed high-quality SVG icons.
                                    Click any icon to copy its import statement. All icons are available in both outline and solid styles.
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <a
                                        href="https://heroicons.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                                    >
                                        Visit Heroicons.com →
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Total: {filteredIcons.length} icons
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Controls */}
                    <Card className="mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search icons..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Style Toggle */}
                            <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                                <button
                                    onClick={() => setIconStyle('outline')}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        iconStyle === 'outline'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    Outline
                                </button>
                                <button
                                    onClick={() => setIconStyle('solid')}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        iconStyle === 'solid'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    Solid
                                </button>
                            </div>
                        </div>
                    </Card>

                    {/* Icons Grid */}
                    <Card>
                        {filteredIcons.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400">
                                    No icons found matching "{searchQuery}"
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                                {filteredIcons.map((iconName) => {
                                    const IconComponent = IconSet[iconName as keyof typeof IconSet] as React.ComponentType<{ className?: string }>;
                                    const isCopied = copiedIcon === iconName;

                                    return (
                                        <button
                                            key={iconName}
                                            onClick={() => copyToClipboard(iconName)}
                                            className="group relative flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all"
                                            title={`Click to copy ${iconName}`}
                                        >
                                            {/* Icon */}
                                            <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                                            
                                            {/* Icon Name */}
                                            <span className="text-xs text-gray-600 dark:text-gray-400 text-center break-all leading-tight">
                                                {iconName.replace(/Icon$/, '')}
                                            </span>

                                            {/* Copied Indicator */}
                                            {isCopied && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 rounded-lg">
                                                    <span className="text-xs font-medium text-white">
                                                        Copied!
                                                    </span>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </Card>

                    {/* Usage Guide */}
                    <Card className="mt-6" title="Usage Guide" subtitle="How to use icons in your components">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    1. Import the icon
                                </h3>
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto">
                                    <pre className="text-sm text-gray-800 dark:text-gray-200">
                                        <code>{`import { HomeIcon } from '@heroicons/react/24/outline';
// or for solid style
import { HomeIcon } from '@heroicons/react/24/solid';`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    2. Use it in your component
                                </h3>
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto">
                                    <pre className="text-sm text-gray-800 dark:text-gray-200">
                                        <code>{`<HomeIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    3. Icon Sizes
                                </h3>
                                <div className="flex items-center gap-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-4 h-4</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-5 h-5</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-6 h-6</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-8 h-8</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-10 h-10</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SparklesIcon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">w-12 h-12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
