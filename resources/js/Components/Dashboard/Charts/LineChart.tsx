interface LineChartProps {
    data: {
        labels: string[];
        values: number[];
    };
    title?: string;
    color?: string;
    height?: number;
}

export default function LineChart({ data, title, color = '#6366f1', height = 200 }: LineChartProps) {
    const max = Math.max(...data.values);
    const min = Math.min(...data.values);
    const range = max - min;

    // Generate SVG path
    const points = data.values.map((value, index) => {
        const x = (index / (data.values.length - 1)) * 100;
        const y = 100 - ((value - min) / range) * 100;
        return `${x},${y}`;
    });

    const pathD = `M ${points.join(' L ')}`;

    // Generate area path (for gradient fill)
    const areaD = `M 0,100 L ${points.join(' L ')} L 100,100 Z`;

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
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                    
                    {/* Area fill */}
                    <path
                        d={areaD}
                        fill="url(#gradient)"
                    />
                    
                    {/* Line */}
                    <path
                        d={pathD}
                        fill="none"
                        stroke={color}
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                    />
                    
                    {/* Points */}
                    {points.map((point, index) => {
                        const [x, y] = point.split(',').map(Number);
                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="1"
                                fill={color}
                                vectorEffect="non-scaling-stroke"
                            />
                        );
                    })}
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
            </div>
        </div>
    );
}
