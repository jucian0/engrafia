#!/usr/bin/env node

import { command, parse } from 'commander';
import Questions from './../lib/create';
import packageJson from './../package.json';

command('create')
  .version(packageJson.version)
  .alias('c')
  .description('Create an Engrafia application')
  .action(async () => Questions());

parse(process.argv);
