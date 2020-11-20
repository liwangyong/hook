import { App } from "vue";
import HookButton from "../../package/button/src/button.vue";

export const compontentsRegister = (Vue: App<Element>) => {
  Vue.component("hook-button", HookButton);
};
