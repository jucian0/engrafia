import inquirer from 'inquirer';
import colors from 'colors';
import pad from 'pad';

const layoutOptions = ['default', 'versioned', 'i18n'];

const questions = [
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
    choices: layoutOptions,
  },
];

export async function Questions() {
  try {
    const answers = inquirer.prompt(questions);

    if (!answers.name) {
      console.log(pad(colors.red('We could not create your app'), 30));
      process.exit(1);
    }
  } catch (err) {
    return err;
  }
}
