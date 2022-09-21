import { Configuration } from "webpack";
import path from "path";

type Options = {
  onStart?: (config: any, options: any) => void;
  extension?: RegExp;
  options?: any;
};

export function mdx(pluginOptions: Options = {}) {
  return (nextConfig: any = {}) => {
    const extension = pluginOptions.extension || /\.mdx$/;

    return Object.assign({}, nextConfig, {
      webpack(config: Configuration, options: any) {
        if (pluginOptions.onStart) {
          pluginOptions.onStart(config, options);
        }

        config.resolve.alias["root_folder"] = path.join(process.cwd());

        config?.module?.rules?.push({
          test: extension,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "@mdx-js/loader",
              options: pluginOptions.options,
            },
          ],
        });

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    });
  };
}
