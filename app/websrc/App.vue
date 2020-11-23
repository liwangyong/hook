<template>
  <div class="hooks-scroll-bar">
    <div class="auto"><router-view /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss">
.auto {
  color: $plain_color !important;
}
</style>
