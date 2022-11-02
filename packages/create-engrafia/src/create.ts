import inquirer from 'inquirer';
import { green } from 'colors';
import makeDir from 'make-dir';
//@ts-ignore
import { isFolderEmpty } from './directory';
import { installDependencies } from './module-utils';
import { resolve } from 'path';
import { error, info, init, success } from './console';
import { TEMPLATE_REPO, QUESTIONS } from './questions';
import { initRepository } from './git';
import download from 'github-directory-downloader';

export default function () {
  init('Create Engrafia');
  inquirer.prompt(QUESTIONS).then(async function (resp) {
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
      // const useYarn = resp.packageManager === 'npm' ? false : shouldUseYarn();
      //      const originalDirectory = process.cwd();
      info(`Creating a new Engrafia app in ${green(resolvedProjectPath)}.`);

      await makeDir(resolvedProjectPath);
      process.chdir(resolvedProjectPath);

      await download(
        `${TEMPLATE_REPO}/${resp.layout}`,
        resolve(__dirname, resolvedProjectPath)
      );

      if (initRepository(resolvedProjectPath)) {
        info('Initialized a git repository.');
      }

      installDependencies(resp.packageManager, resolvedProjectPath);

      success("Congratulations, you've done!");
    } catch (err) {
      error(err);
    }
  });
}
