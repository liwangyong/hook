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
      }
    ]
  });
};
