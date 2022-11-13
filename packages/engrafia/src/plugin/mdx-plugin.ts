import { Configuration } from 'webpack';
import { resolveRoot } from './utils';

type Options = {
  onStart?: (config: any, options: any) => void;
  extension?: RegExp;
  options?: any;
};

export function mdx(pluginOptions: Options = {}) {
  return (nextConfig: any = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config: Configuration, options: any) {
        if (pluginOptions.onStart) {
          pluginOptions.onStart(config, options);
        }

        const root = resolveRoot(options.dir);

        config.resolve.alias['root_folder'] = root;

        config?.module?.rules?.push({
          test: pluginOptions.extension,
          use: [
            options.defaultLoaders.babel,
            {
              loader: '@mdx-js/loader',
              options: pluginOptions.options,
            },
          ],
        });

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    });
  };
}
