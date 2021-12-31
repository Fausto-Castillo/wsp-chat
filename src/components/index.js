import Vue from "vue";
import WspChat from "./WspChat.vue";


const Components = {
    WspChat
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
