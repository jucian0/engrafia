import { red, cyan, green, bgMagenta, bold } from 'colors';
import pad from 'pad';

export function error(message) {
  console.log(pad(red(message), 30));
}

export function info(message) {
  console.log(pad(cyan(message), 30));
}

export function success(message) {
  console.log(pad(green(message), 60));
}

export function init(message) {
  console.log(pad(bold(bgMagenta(message)), 60));
}
