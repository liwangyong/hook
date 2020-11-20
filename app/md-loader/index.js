/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const md = require("markdown-it")({
  html: true,
  highlight: str => str
});
module.exports = content => {
  const htmlsStr = `
  <template>
  ${md.render(content)}
  </template>
`;
  console.log(htmlsStr);
  return htmlsStr;
};
