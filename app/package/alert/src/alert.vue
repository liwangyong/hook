// alert组件：alert
<template>
  <div
    class="hook-alert-box"
    :class="[modelValue && 'hook-alert-box-show']"
    @click="mackClick"
    :style="{
      backgroundColor: bgColor
    }"
    ref="alert"
  >
    <div class="hook-alert-box-ctn" @click.stop="[]">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
const MODELEVENT = "update:modelValue";
import { defineComponent, watch } from "vue";
export default defineComponent({
  name: "HookAlert",
  model: {
    prop: "modelValue",
    event: [MODELEVENT]
  },
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    maskOut: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "rgba(0,0,0,0.8)"
    }
  },
  emits: [MODELEVENT, "change"],
  setup(props, { emit }) {
    watch(
      () => props.modelValue,
      () => {
        emit("change", props.modelValue);
      }
    );
    const mackClick = () => {
      if (props.maskOut) {
        emit(MODELEVENT, false);
      }
    };
    return {
      mackClick
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hook-alert-box,
.hook-alert-box-show {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}
.hook-alert-box {
  opacity: 0;
  pointer-events: none;
}
.hook-alert-box-show {
  opacity: 1;
  pointer-events: auto;
}
</style>
