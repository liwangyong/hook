import { App } from "vue";
import HookAlert from "./src/alert.vue";
export default (app: App): void => {
  app.component(HookAlert.name, HookAlert);
};

export { HookAlert };
