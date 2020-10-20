/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = plop => {
  plop.setGenerator("component", {
    description: "创建一个新组件",
    prompts: [
      { type: "input", name: "name", message: "请输入组件名称（横线分隔）" },
      { type: "input", name: "CN", message: "请输入组件中文名称" },
      { type: "input", name: "description", message: "请输入组件描述" }
    ],
    actions: [
      {
        type: "add",
        path: path.resolve(__dirname, "../package/{{kebabCase name}}/index.ts"),
        templateFile: path.resolve(__dirname, "../plop-templates/template.hbs")
      },
      {
        type: "add",
        path: path.resolve(
          __dirname,
          "../package/{{kebabCase name}}/__tests__/{{kebabCase name}}.spec.ts"
        ),
        templateFile: path.resolve(
          __dirname,
          "../plop-templates/__tests__/template.spec.hbs"
        )
      },
      {
        type: "add",
        path: path.resolve(
          __dirname,
          "../package/{{kebabCase name}}/src/{{kebabCase name}}.vue"
        ),
        templateFile: path.resolve(
          __dirname,
          "../plop-templates/src/template.hbs"
        )
      },
      {
        type: "add",
        path: path.resolve(__dirname, "../types/{{kebabCase name}}.d.ts"),
        templateFile: path.resolve(
          __dirname,
          "../plop-templates/template.d.ts.hbs"
        )
      },
      {
        type: "append",
        path: path.resolve(__dirname, "../package/index.ts"),
        template:
          "export { default as Hook{{titleCase name}} } from './{{kebabCase name}}'"
      },
      {
        type: "append",
        path: path.resolve(__dirname, "../lib/index.ts"),
        template:
          "export { Hook{{titleCase name}} } from '../package/{{kebabCase name}}'"
      },
      {
        type: "append",
        path: path.resolve(__dirname, "../types/hook-ui.d.ts"),
        template:
          "import { Hook{{titleCase name}} } from './{{kebabCase name}}'"
      },
      {
        type: "append",
        path: path.resolve(__dirname, "../types/hook-ui.d.ts"),
        template: "export { Hook{{titleCase name}} }"
      }
    ]
  });
};
