import { App } from "vue";
import HookButton from "./src/button.vue";
export default (app: App): void => {
  app.component(HookButton.name, HookButton);
};

export { HookButton };
