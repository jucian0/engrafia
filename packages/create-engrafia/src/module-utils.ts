import validateProjectName from 'validate-npm-package-name';
import { execSync } from 'child_process';
import { error, info } from './console';

export function validateNpmName(name) {
  const nameValidation = validateProjectName(name);
  if (nameValidation.validForNewPackages) {
    return { valid: true };
  }

  return {
    valid: false,
    problems: [
      ...(nameValidation.errors || []),
      ...(nameValidation.warnings || []),
    ],
  };
}

function shouldUseYarn() {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      return Boolean(userAgent && userAgent.startsWith('yarn'));
    }
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

export function installDependencies(client: string, directory: string) {
  const yarn = () => execSync(`cd ${directory} && yarn`, { stdio: 'inherit' });
  const npm = () => execSync(`cd ${directory} && npm i`, { stdio: 'inherit' });

  try {
    if (client === 'yarn') {
      if (shouldUseYarn()) {
        info('Installing dependencies with YARN!');
        yarn();
      } else {
        info('Could not find YARN, using NPM to install!');
        npm();
      }
    } else {
      info('Installing dependencies with NPM!');
      npm();
    }
  } catch (e) {
    error('Error when installing dependencies!');
  }
}
