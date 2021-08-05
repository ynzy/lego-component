import { App } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const plugins = {
  install: (app: App): void => {
    app.config.globalProperties.$echo = () => {
      console.log("a plugin");
    };
    app.component("HelloWorld", HelloWorld);
    app.provide("test", { message: "from plugin" });
  },
};

export default plugins;
