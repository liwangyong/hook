import { App } from "vue";
import HookButton from "@package/button/src/button.vue";
import HookAlert from "@package/alert/src/alert.vue";
import HookInput from "@package/input/src/input.vue";
import HookLoading from "@package/loading/src/loading.vue";
import hookUiSwiper from "@package/hook-ui-swiper/src/hook-ui-swiper.vue";

export const compontentsRegister = (Vue: App<Element>) => {
  Vue.component("hook-button", HookButton);
  Vue.component("hook-alert", HookAlert);
  Vue.component("hook-loading", HookLoading);
  Vue.component("hook-input", HookInput);
  Vue.component("hook-ui-swiper",hookUiSwiper)
};
