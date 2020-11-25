<template>
  <div class="hooks-scroll-bar">
    <div class="auto">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    // nextTick(() => {
    //   hljs.configure({ useBR: true });
    //   document.querySelectorAll("code").forEach((item: any) => {
    //     console.log(item);
    //     hljs.highlightBlock(item);
    //   });
    // });
  }
});
</script>
<style lang="scss">
.auto {
  color: $plain_color !important;
}
</style>
