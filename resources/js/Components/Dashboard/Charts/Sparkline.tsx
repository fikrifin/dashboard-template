interface SparklineProps {
    data: number[];
    color?: string;
    height?: number;
    showDots?: boolean;
}

export default function Sparkline({ 
    data, 
    color = '#6366f1', 
    height = 40, 
    showDots = false 
}: SparklineProps) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - ((value - min) / range) * 100;
        return `${x},${y}`;
    });

    const pathD = `M ${points.join(' L ')}`;

    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full"
            style={{ height: `${height}px` }}
        >
            <path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
            />
            
            {showDots && points.map((point, index) => {
                const [x, y] = point.split(',').map(Number);
                return (
                    <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="2"
                        fill={color}
                        vectorEffect="non-scaling-stroke"
                    />
                );
            })}
        </svg>
    );
}
