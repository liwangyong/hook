import { createApp } from "vue";
import App from "./App.vue";
import { compontentsRegister } from "./components";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
const app = createApp(App);
compontentsRegister(app);
app
  .use(store)
  .use(router)
  .mount("#app");
