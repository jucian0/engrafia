import { Category, DocFile } from '../../get-sidebar';

function order(list?: (Category & DocFile)[]) {
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

  return newList.concat(test).sort((a, b) => {
    if (a.meta) {
      return -1;
    } else {
      return 1;
    }
  });
}

function filterByLocale(list: (Category & DocFile)[] = [], locale?: string) {
  if (!locale) {
    return list;
  }
  return list
    ?.filter((item) => {
      if (item.meta) {
        if (item.name.includes(locale)) {
          return item;
        }
        return null;
      }
      return item.children.length > 0;
    })
    .filter((e) => e.name);
}

export function filterSidebarContent(
  list: (Category & DocFile)[] = [],
  locale?: string
) {
  return order(filterByLocale(list, locale));
}

export function orderCategories(
  list: (Category & DocFile)[],
  order: string[]
): (Category & DocFile)[] {
  return list.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
}
