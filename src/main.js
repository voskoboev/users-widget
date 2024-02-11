import Vue from "vue";
import App from "./App";
import AppButton from "../src/components/UI/AppButton.vue";
import AppCard from "../src/components/UI/AppCard.vue";
import AppInput from "../src/components/UI/AppInput.vue";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.component("AppButton", AppButton);
Vue.component("AppCard", AppCard);
Vue.component("AppInput", AppInput);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store,
});
