/* eslint-disable @typescript-eslint/no-var-requires */
const { mdPlugin } = require("./container-plugin");
const {
  scriptExtract,
  styleExtract,
  templateExtract,
  deleteScript
} = require("./until");
const md = require("markdown-it")({
  html: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true,
  highlight: () => " "
});
mdPlugin(md);
module.exports = content => {
  const outCtn = [];
  outCtn.push(
    `
      <template>
        <div class='md-bg'>
        ${deleteScript(md.render(content))}
        </div>
      </template>
      `
  );
  const scriptStr = `
    <script lang='ts'>
          ${scriptExtract(content)}
    </script>
      `;
  outCtn.push(scriptStr);
  outCtn.push(`<style scoped lang="scss">${styleExtract(content)}</style>`);
  return outCtn.join("");
};
