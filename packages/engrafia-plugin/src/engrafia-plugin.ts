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
import { h } from 'hastscript';
import remarkGfm from 'remark-gfm';

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
      watcher.on('change', onFileChange(options.dir));
      watcher.on('add', onFileChange(options.dir));
      watcher.on('unlink', onFileChange(options.dir));
    } else {
      writeMdxIndex(options.dir);
    }
  },

  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMetadataPlugin],
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          content: h('i.gg-link', { ariaHidden: 'true' }),
        },
      ],
      [addClasses, { 'h1,h2,h3,h4,h5,h6': 'title' }],
      injectCodeToPlayground,
    ],
  },
});

function onFileChange(dir: string) {
  return (name: string) => {
    const ext = path.extname(name);
    if (!EXTENSIONS_TO_WATCH.includes(ext)) {
      return;
    }
    writeMdxIndex(dir);
  };
}

export function engrafia(nextConfig: any = {}) {
  return withMDX(nextConfig);
}
