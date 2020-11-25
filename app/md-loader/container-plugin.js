/* eslint-disable @typescript-eslint/no-var-requires */
const mdItContainer = require("markdown-it-container");
const hljs = require("highlight.js");
const mdPlugin = md => {
  md.use(mdItContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s+(.*)$/);
    },
    render(tokens, idx) {
      const ctrnList = tokens
        .map((item, index) => {
          if (item.type === "fence" && index !== idx - 1) {
            return item.content.split(" ");
          }
        })
        .flat()
        .filter(Boolean);
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
      if (tokens[idx].nesting === 1 && (m || []).length) {
        return `
          ${ctrnList.join(" ")}
          <details open>
            <summary> ${m[1]} (code) </summary>
            <div class='high-code'>
            <pre><code class="hljs language-html">${
              hljs.highlight("html", ctrnList.join(" ")).value
            }</code></pre>
            </div>
        `;
      } else {
        return "</details>";
      }
    }
  });
};
module.exports = {
  mdPlugin
};
