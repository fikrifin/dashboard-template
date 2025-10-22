interface AreaChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            values: number[];
            color: string;
        }[];
    };
    title?: string;
    height?: number;
}

export default function AreaChart({ data, title, height = 200 }: AreaChartProps) {
    const allValues = data.datasets.flatMap(d => d.values);
    const max = Math.max(...allValues);
    const min = Math.min(...allValues);
    const range = max - min;

    const generatePath = (values: number[]) => {
        const points = values.map((value, index) => {
            const x = (index / (values.length - 1)) * 100;
            const y = 100 - ((value - min) / range) * 100;
            return `${x},${y}`;
        });
        return points.join(' L ');
    };

    const generateAreaPath = (values: number[]) => {
        const linePath = generatePath(values);
        return `M 0,100 L ${linePath} L 100,100 Z`;
    };

    return (
        <div className="w-full">
            {title && (
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {title}
                </h3>
            )}
            <div className="relative" style={{ height: `${height}px` }}>
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <defs>
                        {data.datasets.map((dataset, index) => (
                            <linearGradient
                                key={index}
                                id={`gradient-${index}`}
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                            >
                                <stop offset="0%" style={{ stopColor: dataset.color, stopOpacity: 0.4 }} />
                                <stop offset="100%" style={{ stopColor: dataset.color, stopOpacity: 0 }} />
                            </linearGradient>
                        ))}
                    </defs>
                    
                    {/* Render areas (reversed order so first dataset is on top) */}
                    {[...data.datasets].reverse().map((dataset, index) => (
                        <path
                            key={`area-${index}`}
                            d={generateAreaPath(dataset.values)}
                            fill={`url(#gradient-${data.datasets.length - 1 - index})`}
                        />
                    ))}
                    
                    {/* Render lines */}
                    {data.datasets.map((dataset, index) => (
                        <path
                            key={`line-${index}`}
                            d={`M ${generatePath(dataset.values)}`}
                            fill="none"
                            stroke={dataset.color}
                            strokeWidth="0.5"
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}
                </svg>
                
                {/* Labels */}
                <div className="flex justify-between mt-2">
                    {data.labels.map((label, index) => (
                        <span
                            key={index}
                            className="text-xs text-gray-500 dark:text-gray-400"
                        >
                            {label}
                        </span>
                    ))}
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {data.datasets.map((dataset, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="w-3 h-0.5"
                                style={{ backgroundColor: dataset.color }}
                            />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                {dataset.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
