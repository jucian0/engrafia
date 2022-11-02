const LAYOUT_OPTIONS = ['default', 'versioned', 'i18n'];
const PACKAGE_MANAGER_OPTIONS = ['yarn', 'npm'];
export const TEMPLATE_REPO = `https://github.com/Jucian0/engrafia/tree/main/examples`;

export const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your project name?',
    default: 'engrafia-app',
  },
  {
    type: 'list',
    name: 'layout',
    message: 'What template would you like to use?',
    choices: LAYOUT_OPTIONS,
  },
  {
    type: 'list',
    name: 'packageManager',
    message: 'What package manager would you like to use?',
    choices: PACKAGE_MANAGER_OPTIONS,
  },
];
