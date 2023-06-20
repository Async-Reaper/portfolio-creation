import * as React from 'react';
import { SVGAttributes } from 'react';

export const UpIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <path
                    d="M16.042 7.437c-.468.005-.9-.242-1.13-.644l-1.796-3.15c-.49-.858-1.742-.858-2.232 0l-1.796 3.15c-.23.402-.662.649-1.13.644l-3.662-.04c-.998-.01-1.624 1.06-1.115 1.907l1.865 3.11c.239.396.239.89 0 1.287l-1.865 3.11c-.509.847.117 1.917 1.115 1.906l3.731-.04c.425-.005.819.22 1.027.585.587 1.03 2.178.618 2.178-.564v-1.851c0-.698-.573-1.264-1.28-1.264h-.17c-.985 0-1.6-1.052-1.108-1.895l2.217-3.79c.493-.841 1.725-.841 2.218 0l2.217 3.79c.493.843-.123 1.895-1.109 1.895h-.169c-.707 0-1.28.566-1.28 1.264v1.851c0 1.182 1.59 1.593 2.178.564.208-.366.602-.59 1.027-.585l3.73.04c.999.01 1.625-1.06 1.116-1.907l-1.865-3.11a1.248 1.248 0 010-1.287l1.865-3.11c.509-.847-.117-1.917-1.115-1.906l-3.662.04z"
                    fill={color}
                />
            </svg>
        );
    },
);
