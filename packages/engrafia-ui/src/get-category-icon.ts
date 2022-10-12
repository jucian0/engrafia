export function getCategoryIcon(relativePath: string): any {
  const path = relativePath.replace('/docs', 'root_folder') + 'icon.svg';

  //`${relativePath.replace('/docs', 'root_folder')}/icon.svg`.toString();

  try {
    console.log(path);
    return require(path);
  } catch (err) {
    console.log('quebrou', err);

    return '';
  }
}
