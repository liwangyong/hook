// 输入框组件：输入框组件
<template>
  <div
    class="hook-input-box"
    :class="[focusComputed && 'hook-fouce-input-box']"
  >
    <transition name="fade">
      <div class="hooks-display-inline-block"><slot name="prefix"></slot></div>
    </transition>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="modelInput"
      :autofocus="autofocus"
      @focus="modelFocus"
      @blur="modelBlur"
      @change="modelChange"
      @compositonstart="modelCompositionStatus(true, $event)"
      @compositionupdate="modelCompositionStatus(false, $event)"
      @compositionend="modelCompositionStatus(true, $event)"
    />
    <template v-if="clearable">
      <span @click="modelEmitValue('')" class="hook-input-clearable">x</span>
    </template>
    <transition name="fade">
      <div class="hooks-display-inline-block suffix">
        <slot name="suffix"></slot>
      </div>
    </transition>
    <transition name="fade">
      <template v-if="isVerification">
        <span
          class="hook-error-text"
          :style="{ top: `${Number(height.split('px')[0]) + 15}px` }"
        >
          {{ errorText }}
        </span>
      </template>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
const MODELEVENT = "update:modelValue";
type ValidityFun = (value: string | number) => boolean;
type ModelValue = PropType<string | number>;
type inputType = PropType<
  "text" | "value" | "password" | "number" | "textarea"
>;
export default defineComponent({
  name: "HookInput",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String as inputType,
      default: "text"
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String as ModelValue,
      default: null
    },
    validity: {
      type: Function as PropType<ValidityFun>,
      default: null
    },
    errorText: {
      type: String,
      default: "请输入有效值"
    },
    placeholder: {
      type: String,
      default: "请输入数据"
    }
  },
  emits: [MODELEVENT, "blur", "change", "input"],
  setup(props, { emit }) {
    const focus = ref<boolean>(props.autofocus);
    const isComposition = ref<boolean>(true);
    const isVerification = ref<boolean>(false);
    const focusComputed = computed(() => focus.value);
    const modelEmitValue = (value: string | number) => {
      emit("update:modelValue", value);
    };
    const modelInput = event => {
      const { value } = event.target;
      emit("input", value);
      if (isComposition.value) {
        modelEmitValue(value);
      }
    };
    const modelFocus = () => {
      isVerification.value = false;
      focus.value = true;
    };
    const modelBlur = e => {
      focus.value = false;
      emit("blur", e.target.value);
    };
    const modelChange = e => {
      const { value } = e.target;
      emit("change", value);
      // isVerification.value = props.validity && !props.validity(value);
    };
    // 控制中文输入
    const modelCompositionStatus = (value: boolean, event) => {
      if (value) {
        modelEmitValue(event.target.value);
      }
      isComposition.value = value;
    };
    return {
      modelInput,
      focusComputed,
      isComposition,
      modelCompositionStatus,
      modelFocus,
      isVerification,
      modelChange,
      modelEmitValue,
      modelBlur
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hook-input-box {
  width: auto;
  height: 36px;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid $delete_color;
  position: relative;
  transition: border-color 0.3s;
  &:hover {
    border: 1px solid $secondary;
  }
  &:hover .hook-input-clearable {
    opacity: 1;
    transition: opacity 0.3s;
    border: 1px solid $select_color;
  }
  .hook-error-text {
    width: 100%;
    left: 10px;
    display: inline-block;
    position: absolute;
    font-size: 13px;
    animation: wobble 0.5s ease;
    color: $danger_color;
  }
  input {
    width: 170px;
    height: 24px;
    outline: 0;
    border: 0px;
    color: $plain_color;
    text-indent: 6px;
    transition: all 0.3s;
    background: transparent;
  }
  .hook-input-clearable {
    opacity: 0;
    transition: opacity 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 100%;
    color: $delete_color;
    border: 1px solid $delete_color !important;
    margin-right: 5px;
    // font-size: 18px;
    cursor: pointer;
  }
  .suffix {
    margin-right: 6px;
    display: flex;
    align-items: center;
  }
}
.hook-fouce-input-box {
  border: 1px solid $ordinary_color !important;
}
</style>
