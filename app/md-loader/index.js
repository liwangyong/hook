/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const hljs = require("highlight.js"); // https://highlightjs.org/
const md = require("markdown-it")({
  html: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true,
  highlight: (html, type) => {
    if (type) {
      return html;
    } else {
      return `<div class='high-code'>
        ${hljs.highlight("html", html).value}
      </div>`;
    }
  }
});
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
