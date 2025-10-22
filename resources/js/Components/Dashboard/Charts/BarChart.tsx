interface BarChartProps {
    data: {
        labels: string[];
        values: number[];
    };
    title?: string;
    color?: string;
    height?: number;
}

export default function BarChart({ data, title, color = '#6366f1', height = 200 }: BarChartProps) {
    const max = Math.max(...data.values);

    return (
        <div className="w-full">
            {title && (
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {title}
                </h3>
            )}
            <div className="flex items-end justify-between gap-2" style={{ height: `${height}px` }}>
                {data.values.map((value, index) => {
                    const heightPercent = (value / max) * 100;
                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full flex flex-col justify-end" style={{ height: `${height - 30}px` }}>
                                <div
                                    className="w-full rounded-t transition-all duration-300 hover:opacity-80 relative group"
                                    style={{
                                        height: `${heightPercent}%`,
                                        backgroundColor: color,
                                    }}
                                >
                                    {/* Tooltip on hover */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {value}
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                {data.labels[index]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
