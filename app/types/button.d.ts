/** Button Component */
import { HookUIComponent } from "./compontent";
export declare class HookButton extends HookUIComponent {
  /** 按键宽度 */
  width: number;

  /** 按键高度 */
  height: number;

  /** 是否加载 */
  loading: boolean;

  /** 是否禁用 */
  disabled: boolean;

  /** 按钮平常时的背景颜色 */
  backgroundColor: string;

  /** 文字颜色 */
  textColor: string;

  /** hover 背景色 */
  hoverColor: string;

  /** 按压 背景色 */
  pressColor: string;

  /** 波浪 颜色 */
  moireColor: string;

  /** 波浪时间 */
  duration: string;
}
