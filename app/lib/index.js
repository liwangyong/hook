// sumFunction 插件对应组件的名字
import * as plugins from "./package/index";
plugins.install = Vue => {
  for (const i in plugins) {
    plugins[i](Vue);
  }
};
export default plugins;
