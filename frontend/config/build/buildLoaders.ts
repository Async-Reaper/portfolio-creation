import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true})

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };


    // const fileLoaderFonts = {
    //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //             options: {
    //                 name: '[name].[ext]',
    //                 outputPath: 'fonts/'
    //             }
    //         }
    //     ]
    // }


    return [
        fileLoader,
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },

        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
