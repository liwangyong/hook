import type Vue from 'vue'
import { HookButton } from "./button";
import { HookAlert } from "./alert";
import { HookLoading } from './loading'
export default {
  install(vue: typeof Vue, ...options: any[]): void;
}

export { HookButton };

export { HookAlert };

export {HookLoading}
