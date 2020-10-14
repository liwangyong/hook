import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe(`${Button.name}.vue`, () => {
  it("loading", () => {
    const wrapper = mount<any>(Button, {
      props: {
        loading: true
      }
    });
    expect(wrapper.find(".hook-button-loading").exists()).toBe(true);
  });
  it("disable", () => {
    const wrapper = mount<any>(Button, {
      props: {
        disable: true
      }
    });
    expect(wrapper.find(".hook-button-disable").exists()).toBe(true);
  });
});
