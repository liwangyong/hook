/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const md = require("markdown-it")({
  html: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true,
  highlight: str => str
});
module.exports = content => {
  const htmlsStr = `
  <template>
  <div class='md-bg'>
  ${md.render(content)}
  </div>
  </template>
`;
  console.log(htmlsStr);
  return htmlsStr;
};
