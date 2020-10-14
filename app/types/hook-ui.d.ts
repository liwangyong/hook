import { HookButton } from "./button";
export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}

export const version: string;

export function install(vue: typeof Vue, options: InstallationOptions): void;

export const Button: HookButton;
