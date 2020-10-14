import { App } from "vue";
import Button from "./src/button.vue";
export default (app: App): void => {
  app.component(Button.name, Button);
};

export { Button };
