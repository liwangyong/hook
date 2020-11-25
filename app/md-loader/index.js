/* eslint-disable @typescript-eslint/no-var-requires */
const { mdPlugin } = require("./until");
const md = require("markdown-it")({
  html: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true,
  highlight: () => " "
});
mdPlugin(md);
module.exports = content => {
  const htmlsStr = `
  <template>
  <div class='md-bg'>
  ${md.render(content)}
  </div>
  </template>
`;
  return htmlsStr;
};
