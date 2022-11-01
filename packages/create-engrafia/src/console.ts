import { red } from 'colors';
import pad from 'pad';

export function error(message) {
  console.log(pad(red(message), 30));
}

export function info(message) {
  console.log(pad(message, 30));
}
