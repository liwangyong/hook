<template>
  <!-- <HookButton></HookButton> -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="70px"
    height="70px"
    viewBox="0 0 50 50"
    style="enable-background:new 0 0 50 50"
    xml:space="preserve"
  >
    <path
      fill="rgba(0, 165, 237, 1)"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      transform="rotate(275.098 25 25)"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.8s"
        repeatCount="indefinite"
      ></animateTransform>
    </path>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import HookButton from "@package/button/src/button.vue";
export default defineComponent({
  components: {
    // HookButton
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
