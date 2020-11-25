## Input 输入框

input 常用输入框

## 使用示例

:::demo HookInput 组件代码

```html
<hook-input v-model="value"></hook-input>
<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        value: "input"
      };
    }
  });
</script>
```

:::

## Attributes

| 参数名称      | 说明     | 属性     | 默认值       |
| :------------ | :------- | :------- | :----------- |
| `disabled`    | 禁用     | Boolean  | false        |
| `clearable`   | 高度     | Boolean  | true         |
| `type`        | 类型     | String   | text         |
| `autofocus`   | 聚焦     | Boolean  | false        |
| `modelValue`  | 值       | String   | `null`       |
| `validity`    | 验证函数 | Function | `null`       |
| `errorText`   | 错误提示 | String   | 请输入有效值 |
| `placeholder` | 文字提示 | String   | 请输入数据   |

## Event

| 参数名称 | 说明     | 属性   | 默认值 |
| :------- | :------- | :----- | :----- |
| `blur`   | 失去焦点 | String | `null` |
| `change` | 改变值   | String | `null` |
| `input`  | 输入值   | String | `null` |
