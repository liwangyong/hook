import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoadingComponent from "@/components/loading.vue";
import LoadingError from "@/components/error.vue";
import { routerMenu } from "./router-config";
const getAsyncComponent = fnc => {
  return defineAsyncComponent({
    loader: fnc,
    delay: 200,
    timeout: 50000,
    errorComponent: LoadingError,
    loadingComponent: LoadingComponent
  });
};
const routes: Array<RouteRecordRaw> = routerMenu.map(({ path, name, fnc }) => ({
  path,
  name,
  component: () => getAsyncComponent(() => fnc)
}));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
