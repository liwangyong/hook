// 加载组件：加载组件
<template>
  <div class="hook-loading-box">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 30"
      style="enable-background:new 0 0 50 50"
      xml:space="preserve"
    >
      <rect x="0" y="9.22656" width="4" height="12.5469" :fill="color">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="10" y="5.22656" width="4" height="20.5469" :fill="color">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="20" y="8.77344" width="4" height="13.4531" :fill="color">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HookLoading",
  props: {
    width: {
      type: String,
      default: "24px"
    },
    height: {
      type: String,
      default: "30px"
    },
    color: {
      type: String,
      default: "#00a5ed"
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hook-loading-box {
}
</style>
