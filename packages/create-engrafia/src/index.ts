#!/usr/bin/env node

import { Command } from 'commander';
import questions from './create';
//@ts-ignore
import packageJson from '../package.json';

const program = new Command();

program
  .name('Engrafia')
  .description('Engrafia website generator')
  .version(packageJson.version);

program
  .command('create')
  .description('Create an Engrafia web application.')
  .action(() => {
    questions();
  });

program.parse();
