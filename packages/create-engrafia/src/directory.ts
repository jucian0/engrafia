import { access, readdirSync, lstatSync } from 'fs';
import { join } from 'path';
import { green, blue } from 'colors';
import pad from 'pad';

export function isADirectory() {
  let result = null;
  access('./directory-name', function (error) {
    if (error) {
      console.log('Directory does not exist.');
      result = false;
    } else {
      console.log('Directory exists.');
      result = true;
    }
  });

  return result;
}

export function isFolderEmpty(root, name) {
  const validFiles = [
    '.DS_Store',
    '.git',
    '.gitattributes',
    '.gitignore',
    '.gitlab-ci.yml',
    '.hg',
    '.hgcheck',
    '.hgignore',
    '.idea',
    '.npmignore',
    '.travis.yml',
    'LICENSE',
    'Thumbs.db',
    'docs',
    'mkdocs.yml',
    'npm-debug.log',
    'yarn-debug.log',
    'yarn-error.log',
  ];

  const conflicts = readdirSync(root)
    .filter((file) => !validFiles.includes(file))
    .filter((file) => !/\.iml$/.test(file));

  if (conflicts.length > 0) {
    console.log(
      pad(
        `The directory ${green(name)} contains files that could conflict:`,
        null
      ),
      30
    );

    for (const file of conflicts) {
      try {
        const stats = lstatSync(join(root, file));
        if (stats.isDirectory()) {
          console.log(`  ${blue(file)}/`);
        } else {
          console.log(`  ${file}`);
        }
      } catch {
        console.log(`  ${file}`);
      }
    }
    console.log(
      'Either try using a new directory name, or remove the files listed above.'
    );
    return false;
  }

  return true;
}
