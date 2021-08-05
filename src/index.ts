import { App } from "vue";
import LText from "./components/LText";
import LImage from "./components/LImage";
import LShape from "./components/LShape";

export * from "./defaultProps";

const components = [LText, LImage, LShape];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, LImage, LShape, install };

export default {
  install,
};
