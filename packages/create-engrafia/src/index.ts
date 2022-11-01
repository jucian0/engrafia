import { command, parse } from 'commander';
import Questions from './create';
//@ts-ignore
import packageJson from '../package.json';

command('create')
  .version(packageJson.version)
  .alias('c')
  .description('Create an Engrafia application')
  .action(async () => Questions());

parse(process.argv);
