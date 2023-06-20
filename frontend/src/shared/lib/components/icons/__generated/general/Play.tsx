import * as React from 'react';
import { SVGAttributes } from 'react';

export const PlayIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <circle cx={12} cy={12} r={8.5} stroke={color} />
                <path d="M10.5 9.402L15 12l-4.5 2.598V9.402z" stroke={color} />
            </svg>
        );
    },
);
