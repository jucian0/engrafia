export function getCategoryIcon(relativePath: string): any {
  const path = relativePath.replace('/docs', 'root_folder') + 'icon.svg';

  //`${relativePath.replace('/docs', 'root_folder')}/icon.svg`.toString();

  try {
    return require(path);
  } catch (err) {

    return '';
  }
}
