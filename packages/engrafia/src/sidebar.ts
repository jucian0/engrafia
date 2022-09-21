import { to } from 'await-to-js';
import fs from 'fs';
import dirTree from 'directory-tree';
import getFrontMatter from 'front-matter';
import path from 'path';
import { debounce, formatRelativePath, formatTitle } from './utils';

export const writeMdxIndex = debounce((dir: string) => {
  return getMdxFilesIndex(dir)
    .then((index) => {
      return fs.promises.writeFile(
        'sidebar.json',
        JSON.stringify(index, null, 4)
      );
    })
    .catch((e) => {
      console.error('could not write mdx sidebar file');
      console.error(e);
    });
}, 2000);

async function getMdxFilesIndex(dir: string) {
  const pagesPath = await getPagesPath(dir);
  const tree = dirTree(
    process.cwd() + '/' + pagesPath,
    { normalizePath: true, extensions: /\.mdx?/ },
    (node: any) => {
      const pathName = node.path;
      const content = fs.readFileSync(pathName).toString();
      const { attributes = {} } = getFrontMatter(content);
      const { name = '', ...meta }: any = attributes;
      node.meta = meta || {};
      node.title = name || formatTitle(node.name || '');
      node.url = formatRelativePath(path.relative(pagesPath, pathName));
    },
    (node: any) => {
      node.title = formatTitle(node.name);
    }
  );

  console.log(tree, '<<<<<<<<<<<<<<<<<<');

  if (tree.name === 'src') {
    const pagesNode = tree.children?.find((x) => x.name === 'pages');
    return pagesNode as dirTree.DirectoryTree<any>;
  }
  return tree;
}

async function getPagesPath(dir: string) {
  var [err, stats] = await to(fs.promises.stat(`${dir}/pages`));
  if (!err && stats?.isDirectory()) {
    return 'pages';
  }
  var [err, stats] = await to(fs.promises.stat(`${dir}/src/pages`));
  if (!err && stats?.isDirectory()) {
    return 'src/pages';
  }
  throw new Error('cannot find pages directory in: ' + process.cwd());
}
