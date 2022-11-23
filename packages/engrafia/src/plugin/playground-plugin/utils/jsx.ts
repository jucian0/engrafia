import * as jsxUtils from 'jsx-ast-utils';
import strip from 'strip-indent';
import escapeJS from 'js-string-escape';

import { valueFromTraverse } from './ast';

export const propFromElement = (prop: string) =>
  valueFromTraverse(
    (p) => p.isJSXOpeningElement(),
    (p) => jsxUtils.getPropValue(jsxUtils.getProp(p.node.attributes, prop))
  );

export const removeTags = (code: string) => {
  return code.replace('<Playground>', '').replace('</Playground>', '');
};

export const sanitizeCode = (code: string) => {
  const trimmed = strip(code).trim();
  const newCode =
    trimmed.startsWith('{') && trimmed.endsWith('}')
      ? trimmed.substr(1, trimmed.length - 2).trim()
      : trimmed;

  return escapeJS(strip(newCode));
};

const regex = /^\<\\?(\w+)/;

export const componentName = (value: any) => {
  const match = value.match(regex);
  return match && match[1];
};
