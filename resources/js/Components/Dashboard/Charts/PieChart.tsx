interface PieChartProps {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    title?: string;
    size?: number;
}

export default function PieChart({ data, title, size = 200 }: PieChartProps) {
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

    const createArc = (startAngle: number, endAngle: number, radius: number) => {
        const start = polarToCartesian(50, 50, radius, endAngle);
        const end = polarToCartesian(50, 50, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        
        return [
            'M', 50, 50,
            'L', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
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
                <svg width={size} height={size} viewBox="0 0 100 100" className="flex-shrink-0">
                    {segments.map((segment, index) => (
                        <path
                            key={index}
                            d={createArc(segment.startAngle, segment.endAngle, 45)}
                            fill={segment.color}
                            className="transition-opacity hover:opacity-80 cursor-pointer"
                        />
                    ))}
                </svg>
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
