import * as React from 'react';
import { SVGAttributes } from 'react';

export const SalesIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <g clipPath="url(#sales_svg__a)">
                    <path
                        d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="sales_svg__a">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                </defs>
            </svg>
        );
    },
);
