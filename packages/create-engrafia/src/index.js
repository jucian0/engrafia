#!/usr/bin/env node

import { command, parse } from 'commander';
import Questions from './../lib/create';

command('create')
  .version('1.0.0')
  .alias('c')
  .description('Create an Engrafia application')
  .action(async () => Questions());

parse(process.argv);
