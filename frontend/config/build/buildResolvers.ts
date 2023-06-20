import {ResolveOptions} from 'webpack';
import {BuildOptions} from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            // '@': options.paths.src,
            mixins: `${options.paths.src}/shared/ui/_mixins.scss`,
            size: `${options.paths.src}/shared/ui/_adaptive.scss`,
        },
    };
}
