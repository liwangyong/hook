// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const babelOptions = {
  plugins: ["@vue/babel-plugin-jsx"]
};
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    // 解决ie11兼容ES6
    config
      .entry("main")
      .add("babel-polyfill")
      .end();
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`
      }
    }
  },
  configureWebpack: {
    entry: path.resolve(__dirname, "./lib/index.ts"),
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      libraryExport: "default",
      filename: "index.js",
      library: "HOOKSUI",
      libraryTarget: "amd",
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
    },
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    },
    //或者
    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  }
};
