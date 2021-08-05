import { shallowMount } from "@vue/test-utils";
import LText from "@/components/LText";
import { textDefaultProps } from "../../src/defaultProps";

describe("LText.vue", () => {
  const { location } = window;
  beforeEach(() => {
    // 换掉浏览器原生属性方法
    Object.defineProperty(window, "location", {
      writable: true,
      value: {
        href: "",
      },
    });
  });
  afterEach(() => {
    window.location = location;
  });

  // 测试基本样式
  it("default LText render", () => {
    const msg = "new message";
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        text: msg,
      },
    });
    // should have the right text
    expect(wrapper.text()).toBe(msg);
    // should be default div tag
    expect(wrapper.element.tagName).toBe("DIV");
    // should have certian CSS attr
    const style = wrapper.attributes().style;
    expect(style.includes("font-size")).toBeTruthy();
    // should not have prop has been filtered
    expect(style.includes("actionType")).toBeFalsy();
  });
  // 测试点击跳转
  it("LText with actionType and URL should trigger location href change", async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://dummy.url",
      tag: "h2",
    };
    const wrapper = shallowMount(LText, { props });
    expect(wrapper.element.tagName).toBe("H2");
    await wrapper.trigger("click");
    expect(window.location.href).toBe("http://dummy.url");
  });
  // 测试点击不跳转
  it("LText with isEditing should not trigger location change", async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://dummy.url",
      tag: "h2",
      isEditing: true,
    };
    const wrapper = shallowMount(LText, { props });
    await wrapper.trigger("click");
    expect(window.location.href).not.toBe("http://dummy.url");
  });
});
