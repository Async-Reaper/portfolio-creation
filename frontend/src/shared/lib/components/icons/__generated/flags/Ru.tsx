import * as React from 'react';
import { SVGAttributes } from 'react';

export const RuIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <g clipPath="url(#ru_svg__a)">
                    <rect width={17} height={12} rx={1} fill="#1A47B8" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8h17v4H0V8z"
                        fill="#F93939"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0h17v4H0V0z"
                        fill="#fff"
                    />
                </g>
                <defs>
                    <clipPath id="ru_svg__a">
                        <rect width={17} height={12} rx={1} fill="#fff" />
                    </clipPath>
                </defs>
            </svg>
        );
    },
);
