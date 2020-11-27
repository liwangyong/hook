import { App } from "vue";
import HookHookUiSwiper from "./src/hook-ui-swiper.vue";
export default (app: App): void => {
  app.component(HookHookUiSwiper.name, HookHookUiSwiper);
};

export { HookHookUiSwiper };