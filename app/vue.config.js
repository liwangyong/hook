// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const isDevelopment = process.env.NODE_ENV === "development";
module.exports = {
  pages: {
    index: {
      entry: path.resolve(
        __dirname,
        isDevelopment ? "./websrc/main.ts" : "./lib/index.ts"
      )
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("websrc"))
      .set("@package", resolve("package"));
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "websrc/assets/scss/index.scss";`
      }
    }
  },
  configureWebpack: {
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      libraryExport: "default",
      filename: "index.js",
      library: "HOOKSUI",
      libraryTarget: "umd",
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
