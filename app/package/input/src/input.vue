// 输入框组件：输入框组件
<template>
  <div class="hook-input-box"></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
const MODELEVENT = "update:modelValue";
type ValidityFun = (value: string | number) => boolean;
type ModelValue = PropType<string | number>;
export default defineComponent({
  name: "HookInput",
  prop: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "180px"
    },
    height: {
      type: String,
      default: "36px"
    },
    clearable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String as ModelValue,
      default: null
    },
    validity: {
      type: Function as PropType<ValidityFun>,
      default: () => true
    }
  },
  emits: [MODELEVENT]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hook-input-box {
}
</style>
