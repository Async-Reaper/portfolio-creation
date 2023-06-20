import * as React from 'react';
import { SVGAttributes } from 'react';

export const UkIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <rect width={17} height={12} rx={1} fill="#FFDA2C" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0h17v6.4H0V0z"
                    fill="#3A99FF"
                />
            </svg>
        );
    },
);
