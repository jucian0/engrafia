import commander from 'commander';
import { Questions } from './create';
//@ts-ignore
import { version } from '../package.json';

commander
  .command('create')
  .version(version)
  .alias('c')
  .description('Create an Engrafia application')
  .action(() => Questions());
