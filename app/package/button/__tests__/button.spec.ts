import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe(`${Button.name}.vue`, () => {
  it("button-loading", () => {
    const wrapper = mount<any>(Button, {
      props: {
        loading: true
      }
    });
    expect(wrapper.find(".hook-button-loading").exists()).toBe(true);
  });
  it("button-disable", () => {
    const wrapper = mount<any>(Button, {
      props: {
        disabled: true
      }
    });
    expect(wrapper.find(".hook-button-disable").exists()).toBe(true);
  });
});
