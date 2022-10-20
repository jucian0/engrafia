const LAYOUT_OPTIONS = ['default', 'versioned', 'i18n'];
const PACKAGE_MANAGER_OPTIONS = ['yarn', 'npm'];
const TEMPLATE_REPO = `jucian0/engrafia`;
const TEMPLATE_FOLDER = `examples`;

const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your project named?',
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

export default {
  TEMPLATE_FOLDER,
  TEMPLATE_REPO,
  QUESTIONS,
};
