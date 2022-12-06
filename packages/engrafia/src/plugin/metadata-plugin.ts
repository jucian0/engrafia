import { parse as parseAst, Options } from 'acorn';
import { load as parseYaml } from 'js-yaml';
import { parse as parseToml } from 'toml';
import { generateTableOfContents } from './table-of-content';

type Meta = {
  title: string;
  description: string;
  position?: number;
};

export function remarkMetadataPlugin() {
  return (ast: any) => {
    const tableOfCOntent = generateTableOfContents(ast);

    ast.children = ast.children.map((node: any) => {
      const data = getValue(node);
      if (!data) return node;

      const renderedString = renderer(data, tableOfCOntent);
      const { body }: any = parseAst(renderedString, {
        sourceType: 'module',
        ecmaVersion: 'latest',
      } as Options);

      return {
        type: 'export',
        value: renderedString,
      };
    });
  };
}

function getValue(node: { [k: string]: any }) {
  const { type, value } = node;

  if (type === 'yaml') {
    return parseYaml(value);
  } else if (node['type'] === 'toml') {
    return parseToml(value);
  }
}

function renderer(meta: Meta, tableOfCOntents: {}) {
  return `export const getStaticProps = async () => {
        return { 
          props: {
            meta: ${JSON.stringify(meta)},        
            tableOfContents: ${JSON.stringify(tableOfCOntents)}
          }
        }
      }
    `;
}
