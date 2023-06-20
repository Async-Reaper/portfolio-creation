import * as React from 'react';
import { SVGAttributes } from 'react';

export const EnIcon = React.memo(
    ({
        size = 24,
        color = '#4E5361',
        ...props
    }: SVGAttributes<SVGElement> & {
        size?: number,
    }) => {
        return (
            <svg width={size} height={size} fill="none" {...props}>
                <g clipPath="url(#en_svg__a)">
                    <rect width={17} height={12} rx={1} fill="#fff" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0h7.286v5.6H0V0z"
                        fill="#1A47B8"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.286 0v.8H17V0H7.286zm0 1.6v.8H17v-.8H7.286zm0 1.6V4H17v-.8H7.286zm0 1.6v.8H17v-.8H7.286zM0 6.4v.8h17v-.8H0zM0 8v.8h17V8H0zm0 1.6v.8h17v-.8H0zm0 1.6v.8h17v-.8H0z"
                        fill="#F93939"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M.81.8v.8h.809V.8h-.81zm1.619 0v.8h.81V.8h-.81zm1.619 0v.8h.81V.8h-.81zm1.619 0v.8h.81V.8h-.81zm-.81.8v.8h.81v-.8h-.81zm-1.619 0v.8h.81v-.8h-.81zm-1.619 0v.8h.81v-.8h-.81zm-.81.8v.8h.81v-.8h-.81zm1.62 0v.8h.81v-.8h-.81zm1.619 0v.8h.81v-.8h-.81zm1.619 0v.8h.81v-.8h-.81zM.81 4v.8h.809V4h-.81zm1.619 0v.8h.81V4h-.81zm1.619 0v.8h.81V4h-.81zm1.619 0v.8h.81V4h-.81zm-.81-.8V4h.81v-.8h-.81zm-1.619 0V4h.81v-.8h-.81zm-1.619 0V4h.81v-.8h-.81z"
                        fill="#fff"
                    />
                </g>
                <defs>
                    <clipPath id="en_svg__a">
                        <rect width={17} height={12} rx={1} fill="#fff" />
                    </clipPath>
                </defs>
            </svg>
        );
    },
);
