import chalk from 'chalk';
// @ts-ignore
import downloadRepo from 'github-download-parts/index';
import makeDir from 'make-dir';
import path from 'path';
import { tryGitInit } from './helpers/git';
import { isFolderEmpty } from './helpers/is-folder-empty';
import { shouldUseYarn } from './helpers/should-use-yarn';

const TEMPLATE_FOLDER = `examples`;
const TEMPLATE_REPO = `jucian0/engrafia`;

export async function createApp({
  appPath,
  useNpm,
  layout,
}: {
  appPath: string;
  useNpm: boolean;
  layout: string;
}) {
  const root = path.resolve(appPath);
  const appName = path.basename(root);

  await makeDir(root);
  if (!isFolderEmpty(root, appName)) {
    process.exit(1);
  }

  const useYarn = useNpm ? false : shouldUseYarn();
  const originalDirectory = process.cwd();

  console.log(`Creating a new Engrafia app in ${chalk.green(root)}.`);
  console.log();

  await makeDir(root);
  process.chdir(root);

  await downloadRepo(TEMPLATE_REPO, '.', `${TEMPLATE_FOLDER}/${layout}`);

  if (tryGitInit(root)) {
    console.log('Initialized a git repository.');
    console.log();
  }

  let cdpath: string;
  if (path.join(originalDirectory, appName) === appPath) {
    cdpath = appName;
  } else {
    cdpath = appPath;
  }
  printHelp({
    appName,
    cdpath,
    appPath,
    useYarn,
  });
}

export function printHelp({ appName, useYarn, cdpath, appPath }) {
  console.log(`${chalk.green('Success!')} Created ${appName} at ${appPath}`);
  console.log();
  console.log(
    `run ${chalk.cyanBright(`npm install`)} or ${chalk.cyanBright(
      `yarn`
    )} to install the dependencies`
  );
  console.log();
  console.log(chalk.cyan('  cd'), cdpath);
  console.log(`  ${chalk.cyan(`${useYarn ? 'yarn' : 'npm'} install`)}`);
  console.log(
    `  ${chalk.cyan(`${useYarn ? 'yarn' : 'npm'} ${useYarn ? '' : 'run '}dev`)}`
  );
  console.log();
}
