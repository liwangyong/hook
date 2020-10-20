/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App } from 'vue'
import * as plugin from "../package/index";
const install: any = (Vue: App, option: any) => {
    // 判断是否可以安装
    if (install.installed) return
    for(const i in plugin) {
        plugin[i](Vue)
    }
  }
export default {
  install
};
export {}
export { HookButton } from "../package/button";
export { HookAlert } from "../package/alert";

export { HookLoading } from '../package/loading'