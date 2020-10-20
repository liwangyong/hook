import { App } from "vue";
import HookLoading from "./src/loading.vue";
export default (app: App): void => {
  app.component(HookLoading.name, HookLoading);
};

export { HookLoading };