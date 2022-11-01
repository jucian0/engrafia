import { prompt } from 'inquirer';
import { green } from 'colors';
import makeDir from 'make-dir';
//@ts-ignore
import downloadRepo from 'github-download-parts/index';
import { isFolderEmpty } from './directory';
import { shouldUseYarn } from './module-utils';
import { resolve } from 'path';
import { error, info } from './console';
import { TEMPLATE_FOLDER, TEMPLATE_REPO, QUESTIONS } from './questions';
import { initRepository } from './git';

export default async function () {
  prompt(QUESTIONS).then(async function (resp) {
    if (!resp.name) {
      error('We could not create your app, you should input a name!');
      process.exit(1);
    }

    if (!resp.layout) {
      error('We could not create your app, try again, and select an option!');
      process.exit(1);
    }

    try {
      const resolvedProjectPath = resolve(resp.name);

      await makeDir(resolvedProjectPath);
      if (!isFolderEmpty(resolvedProjectPath, resp.name)) {
        process.exit(1);
      }
      const useYarn = resp.packageManager === 'npm' ? false : shouldUseYarn();
      const originalDirectory = process.cwd();
      info(`Creating a new Engrafia app in ${green(resolvedProjectPath)}.`);

      await makeDir(resolvedProjectPath);
      process.chdir(resolvedProjectPath);

      await downloadRepo(
        TEMPLATE_REPO,
        '.',
        `${TEMPLATE_FOLDER}/${resp.layout}`
      );

      if (initRepository(resolvedProjectPath)) {
        info('Initialized a git repository.');
      }

      info("Congratulations, you've done!");
    } catch (err) {
      error(err);
    }
  });
}
