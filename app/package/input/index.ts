import { App } from "vue";
import HookInput from "./src/input.vue";
export default (app: App): void => {
  app.component(HookInput.name, HookInput);
};

export { HookInput };
