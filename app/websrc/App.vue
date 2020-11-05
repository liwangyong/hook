<template>
  <HookButton @click="xxx = true"></HookButton>
  <HookAlert v-model="xxx" @change="xx">
    <HookLoading color="#fff"></HookLoading>
  </HookAlert>
  <HookInput v-model="xxaa" :validity="() => false">
    <!-- <template #suffix>
      xxx
    </template> -->
  </HookInput>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HookLoading from "@package/loading/src/loading.vue";
import HookButton from "@package/button/src/button.vue";
import HookAlert from "@package/alert/src/alert.vue";
import HookInput from "@package/input/src/input.vue";
export default defineComponent({
  components: {
    HookLoading,
    HookButton,
    HookAlert,
    HookInput
  },
  data() {
    return {
      xxx: false,
      xxaa: null
    };
  },
  methods: {
    xx() {
      console.log("来了");
    }
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
