import type { App } from 'vue'
import * as plugin from "../package/index";
(plugin as any).install = (vue: App) => {
    for(const i in plugin) {
        plugin[i](vue)
    }
}
export default plugin;
export { HookButton } from "../package/button";
export { HookAlert } from "../package/alert";
