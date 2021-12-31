import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#0052cc',
            secondary: '#ff2633',
            backgroundDark: '#1d3460',
            accent: '#8c9eff',
            error: '#ff000a',
          },
        },
      },
      icons: {
        iconfont: 'mdi', // default
      },
});
