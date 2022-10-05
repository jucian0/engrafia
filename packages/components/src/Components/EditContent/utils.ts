import parseGithubUrl from 'parse-github-url';
import { Config } from '../../get-config';
import { SidebarTree } from '../../get-sidebar';

export type MakeGitURLProps = {
  repository?: string;
  branch?: string;
  filePath?: string;
};

export function createEditUrl(props: MakeGitURLProps) {
  try {
    const { repository = '', branch, filePath } = props;
    const parsed = parseGithubUrl(repository);
    return `https://github.com/${parsed?.owner}/${parsed?.name}/edit/${branch}/${filePath}`;
  } catch {
    return '';
  }
}

export function getFilePath(tree: SidebarTree, path: string) {
  let filePath = '';

  function evaluate(tree: SidebarTree, path: string) {
    tree.children.forEach((child) => {
      if (child.children) {
        return evaluate(child, path);
      }
      if (child.url && child.url === path) {
        filePath = child.relativePath;
      }
    });
  }

  evaluate(tree, path);

  return filePath;
}
