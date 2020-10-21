import { mount } from "@vue/test-utils";
import Alert from "../src/alert.vue";

describe("Alert", () => {
  it("button click should increment the count", () => {
    const wrapper = mount<any>(Alert, {
      props: {
        modelValue: true
      }
    });
    expect(wrapper.find(".hook-alert-box-show").exists()).toBe(true);
  });
});
