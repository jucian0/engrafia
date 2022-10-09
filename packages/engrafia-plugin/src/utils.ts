export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: any = 0;

  const debounced = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as unknown as (...args: Parameters<F>) => ReturnType<F>;
};

export function formatTitle(name: string) {
  return capitalizeFirstLetter(
    name
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .replace(/\.mdx?/, '')
  );
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatRelativePath(path: string) {
  let relativePath = path
    .replace('.mdx', '')
    .replace('.md', '')
    .replace('.jsx', '')
    .replace('.tsx', '')
    .replace('.js', '')
    .replace(/\bindex$/, '');

  return '/' + (relativePath || '');
}

export function resolveRoot(dir: string) {
  if (dir !== process.cwd()) {
    const dirSplitted = dir.split('/');
    const processCwdSplitted = process.cwd().split('/');

    dirSplitted.splice(0, processCwdSplitted.length);

    return dirSplitted.join('/');
  }

  return dir;
}
