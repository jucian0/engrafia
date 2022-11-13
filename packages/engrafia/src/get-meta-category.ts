export async function getMetaCategory(relativePath: string): Promise<any> {
  try {
    const { default: translations } = await import(
      `${relativePath.replace('/docs', 'root_folder')}/icon.svg`.toString()
    );
    return translations;
  } catch (err) {
    return '';
  }
}
