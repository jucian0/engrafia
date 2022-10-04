import parseGithubUrl from 'parse-github-url';

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
