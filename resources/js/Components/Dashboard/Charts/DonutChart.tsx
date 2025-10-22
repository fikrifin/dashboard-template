interface DonutChartProps {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    title?: string;
    size?: number;
    centerText?: string;
    centerSubtext?: string;
}

export default function DonutChart({ 
    data, 
    title, 
    size = 200, 
    centerText, 
    centerSubtext 
}: DonutChartProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    let currentAngle = 0;
    const segments = data.map((item) => {
        const percentage = (item.value / total) * 100;
        const angle = (percentage / 100) * 360;
        const startAngle = currentAngle;
        currentAngle += angle;
        
        return {
            ...item,
            percentage,
            startAngle,
            endAngle: currentAngle,
        };
    });

    const createDonutArc = (startAngle: number, endAngle: number, outerRadius: number, innerRadius: number) => {
        const outerStart = polarToCartesian(50, 50, outerRadius, endAngle);
        const outerEnd = polarToCartesian(50, 50, outerRadius, startAngle);
        const innerStart = polarToCartesian(50, 50, innerRadius, endAngle);
        const innerEnd = polarToCartesian(50, 50, innerRadius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        
        return [
            'M', outerStart.x, outerStart.y,
            'A', outerRadius, outerRadius, 0, largeArcFlag, 0, outerEnd.x, outerEnd.y,
            'L', innerEnd.x, innerEnd.y,
            'A', innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
            'Z'
        ].join(' ');
    };

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    return (
        <div className="w-full">
            {title && (
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    {title}
                </h3>
            )}
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative flex-shrink-0">
                    <svg width={size} height={size} viewBox="0 0 100 100">
                        {segments.map((segment, index) => (
                            <path
                                key={index}
                                d={createDonutArc(segment.startAngle, segment.endAngle, 45, 28)}
                                fill={segment.color}
                                className="transition-opacity hover:opacity-80 cursor-pointer"
                            />
                        ))}
                    </svg>
                    {(centerText || centerSubtext) && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            {centerText && (
                                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {centerText}
                                </div>
                            )}
                            {centerSubtext && (
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {centerSubtext}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="space-y-2">
                    {segments.map((segment, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: segment.color }}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                {segment.label}
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 ml-auto">
                                {segment.percentage.toFixed(1)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
