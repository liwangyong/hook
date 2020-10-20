<template>
  <HookLoading></HookLoading>
  <HookButton></HookButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HookLoading from "@package/loading/src/loading.vue";
import HookButton from "@package/button/src/button.vue";
export default defineComponent({
  components: {
    HookLoading,
    HookButton
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
