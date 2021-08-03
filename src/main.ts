import { createApp } from "vue";
import App from "./App.vue";
import Lego from "./index";
const app = createApp(App);
app.use(Lego);
app.mount("#app");
