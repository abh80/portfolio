import { Parser } from "acorn";
import acornJsx from "acorn-jsx";

const ParserWithJSX = Parser.extend(acornJsx());

const parse = (content) =>
  ParserWithJSX.parse(content, {
    ecmaVersion: 2020,
    sourceType: "module",
  });

const withLayout = () => (tree, file) => {
  const data = file["matter-data"] || {};
  if (Object.keys(data).length === 0) return;
  const { layout } = data;
  tree.children.unshift({
    type: "mdxjsEsm",
    data: {
      estree: parse(`import ${layout} from '@/layouts/${layout}'`),
    },
  });
  const content = `export default ({ children }) => (
      <${layout}
        matter={${JSON.stringify(data)}}
      >
        {children}
      </${layout}>
     )`;
  tree.children.push({
    type: "mdxjsEsm",
    data: {
      estree: parse(content),
    },
  });
};

export default withLayout;
