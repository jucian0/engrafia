import { Category, DocFile } from '../../get-sidebar';

export function order(list?: (Category & DocFile)[]) {
  if (!list) {
    return [];
  }

  const newList = list
    .reduce((acc, ac) => {
      if (typeof ac?.meta?.position !== 'undefined') {
        acc[Number(ac.meta.position)] = ac;
        return acc;
      }
      acc.push(ac);
      return acc;
    }, [] as (Category & DocFile)[])
    .filter((e) => e);

  const test = list.filter((item) => {
    return !newList.some((i) => i.name === item.name);
  });

  return newList.concat(test);
}
