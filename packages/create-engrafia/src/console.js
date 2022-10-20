import { red } from 'colors';
import pad from 'pad';

function error(message) {
  console.log(pad(red(message), 30));
}

function info(message) {
  console.log(pad(message, 30));
}

export default {
  error,
  info,
};
