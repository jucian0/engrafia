import { writeMdxIndex } from './sidebar';
import { watch } from 'chokidar';
import remarkFrontmatter from 'remark-frontmatter';
import { mdx } from './mdx-plugin';
import { remarkMetadataPlugin } from './metadata-plugin';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { addClasses } from './table-of-content';
import { injectCodeToPlayground } from './playground-plugin/playground';

const EXTENSIONS_TO_WATCH = ['.mdx', '.md'];

const withMDX = mdx({
  onStart: (_: any, options: { isServer: any; dir: string }) => {
    if (options.isServer) {
      return;
    }
    writeMdxIndex(options.dir);
    if (process.env.NODE_ENV !== 'production') {
      const watcher = watch(['./**/*.mdx', './**/*.md'], {
        persistent: true,
        ignoreInitial: true,
      });
      watcher.on('change', onFileChange);
      watcher.on('add', onFileChange);
      watcher.on('unlink', onFileChange);
    } else {
      writeMdxIndex(options.dir);
    }
  },

  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMetadataPlugin],
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [addClasses, { 'h1,h2,h3,h4,h5,h6': 'title' }],
      injectCodeToPlayground,
    ],
  },
});

function onFileChange(name: any, location: string) {
  const ext = path.extname(name);
  if (!EXTENSIONS_TO_WATCH.includes(ext)) {
    return;
  }
  writeMdxIndex(location);
}

export function engrafia(nextConfig: any = {}) {
  return withMDX(nextConfig);
}
