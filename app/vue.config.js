module.exports = {
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
