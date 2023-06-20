import * as React from 'react';
import { SVGAttributes } from 'react';

export const VolumeIcon = React.memo(
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
                    d="M22.913 7.522c-.925-2.224-2.445-4.118-4.374-5.453A11.532 11.532 0 0012.045 0a11.52 11.52 0 00-6.518 1.984C3.583 3.294 2.042 5.17 1.09 7.381a1.097 1.097 0 00.228 1.204c.102.1.222.176.354.224.23.088.482.083.708-.016a.994.994 0 00.509-.518 10.333 10.333 0 013.697-4.522 9.599 9.599 0 015.448-1.663 9.609 9.609 0 015.426 1.736 10.352 10.352 0 013.643 4.57c.101.233.28.417.503.519a.937.937 0 00.703.031.986.986 0 00.36-.217 1.05 1.05 0 00.244-.353 1.094 1.094 0 000-.854z"
                    fill={color}
                />
                <path
                    d="M17.178 9.444a.978.978 0 00.49.48.906.906 0 00.665.024.955.955 0 00.354-.218c.101-.099.182-.22.236-.354a1.075 1.075 0 00-.02-.846 8.039 8.039 0 00-2.833-3.294A7.423 7.423 0 0012.028 4a7.416 7.416 0 00-4.056 1.187 8.024 8.024 0 00-2.869 3.258 1.07 1.07 0 00.205 1.208c.102.1.223.176.354.222.217.08.454.075.667-.015a.977.977 0 00.495-.473 6.027 6.027 0 012.157-2.448 5.57 5.57 0 013.048-.89 5.577 5.577 0 013.037.93 6.04 6.04 0 012.127 2.477l-.015-.012z"
                    fill={color}
                />
                <path
                    d="M11.998 8c-.544 0-1.08.13-1.57.383-.488.252-.915.62-1.25 1.074a.995.995 0 00-.14.842.955.955 0 00.213.378.884.884 0 00.35.236.822.822 0 00.525.03.855.855 0 00.442-.3c.168-.235.385-.425.634-.555a1.702 1.702 0 011.6.012c.247.134.462.327.626.564a.85.85 0 00.435.303c.172.05.354.043.521-.022a.882.882 0 00.356-.23.952.952 0 00.217-.377.992.992 0 00-.13-.846 3.619 3.619 0 00-1.25-1.096A3.405 3.405 0 0011.998 8zm9.005 5H3a1.002 1.002 0 00-.953 1.309l1.64 5.003a.993.993 0 00.558.607l1.947.826.858 2.572A.997.997 0 008 24h8a.997.997 0 00.949-.683l.858-2.572 1.947-.826a.995.995 0 00.559-.607l1.639-5.003a1.001 1.001 0 00-.95-1.309zm-2.45 5.25l-1.942.826a.99.99 0 00-.559.604l-.772 2.317H8.72l-.772-2.317a.99.99 0 00-.56-.604l-1.942-.825-1.069-3.252h15.246l-1.07 3.252z"
                    fill={color}
                />
            </svg>
        );
    },
);
