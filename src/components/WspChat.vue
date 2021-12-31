<template>
  <div class="text-xs-center">
    <v-menu
      min-width="300"
      top
      v-model="menu"
      :close-on-click="false"
      :close-on-content-click="false"
      :nudge-top="62"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            v-model="fab"
            v-on="on"
            color="#25D366"
            @click="
              fab = !fab;
              menu = false;
            "
            dark
            fixed
            bottom
            right
            fab
          >
            <v-icon v-if="menu == false" size="35">mdi-whatsapp</v-icon>
            <v-icon v-else size="35">mdi-close</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <div>
        <v-list dark class="chat-header">
          <v-list
            class="d-flex justify-space-between align-center px-5"
            style="background-color: #128c7e !important"
          >
            <div class="d-flex">
              <h4 class="align-center">Contactanos</h4>
            </div>
            <div>
              <v-btn
                icon
                @click="
                  fab = !fab;
                  menu = false;
                "
              >
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
          </v-list>
        </v-list>
        <v-divider color="black"></v-divider>
        <v-container class="chat-background">
          <v-layout row wrap>
            <v-flex class="text-left ml-5" xs12>
              <v-chip class="chip-chat"> Hola, en que podemos ayudarte? </v-chip>
            </v-flex>
            <v-flex xs10>
              <v-text-field
                color="teal"
                class="my-input"
                v-model="text"
                outline
                placeholder="Hola, quisiera consultar por ..."
              ></v-text-field>
            </v-flex>
            <v-flex style="padding-top: 12px" xs2>
              <v-btn
                large
                class="teal--text"
                icon
                @click="fab = !fab;menu = false;"
                :href="apilink"
                target="_blank"
              >
                <v-icon large>mdi-send</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    phone: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    // wsp button
    fab: false,
    fav: true,
    menu: false,
    message: false,
    hints: true,
    text: "",
    apilink: "",
  }),
  methods: {
    isMobile() {
      var check = false;
      // eslint-disable-next-line
      (function (a) {if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
  },
  watch: {
    text() {
      this.apilink = "http://";
      this.apilink += this.isMobile() ? "api" : "web";
      this.apilink +=
        ".whatsapp.com/send?phone=" + this.phone + "&text=" + encodeURI(this.text);
    },
  },
  created: function () {
    this.apilink = "http://";
    this.apilink += this.isMobile() ? "api" : "web";
    this.apilink +=
      ".whatsapp.com/send?phone=" + this.phone + "&text=" + encodeURI("Hello!");
  },
};
</script>

<style lang="css" scoped>
.carousel {
  padding-bottom: 57px;
}
.theme--dark.v-btn.v-btn--icon {
  color: blue;
}

.logo-sierraspack {
  height: 1.75rem;
}

.text-home {
  width: 20rem;
  height: 4.063rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #0052cc;
}

.subtext-home {
  width: 23.75rem;
  height: 2.813rem;
  margin-top: 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  text-align: left;
  color: #000000;
}

.complementary-text-home {
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  color: #000000;
}

.tracking-input {
  width: 23.75rem;
  height: 3.5rem;
  border-radius: 4px;
}

.home {
  background: #08163e;
  height: 100vh;
}
@media (min-width: 1024px) {
  .home {
    background: #1d3460;
    height: 100vh;
  }
}


.items-size {
  width: 3.1rem;
  height: 3.607rem;
}

.theme--dark.v-sheet {
  background-color: #ffffff;
}

.v-card-style {
  width: 17.563rem;
  height: 14.25rem;
  text-align: center;
  margin: auto;
  color: #000000;
  box-shadow: 0 5px 22px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
}
@media (min-width: 1024px) {
  .v-card-style {
    width: 17.563rem;
    height: 100%;
    padding-bottom: 29px;
    text-align: center;
    margin: auto;
    color: #000000;
    box-shadow: 0 5px 22px 0 rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
}
.line-red {
  background: #ff2633;
  height: 2px;
  width: 25%;
  position: relative;
  bottom: 50%;
  left: -16%;
  z-index: 1;
}
@media (min-width: 200px) {
  .line-red {
    background: #ff2633;
    height: 2px;
    width: 35%;
    position: relative;
    bottom: 50%;
    left: -20%;
  }
}
.v-sheet.v-card {
  border-radius: 1rem;
}
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
.chat-background {
  background-color: #ece5dd !important;
}
.chat-header {
  background-color: #128c7e !important;
}
.chip-chat {
  background-color: #dcf8c6 !important;
}
.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 17.62);
}
.bottom-bar-desktop {
  bottom: 0%;
  position: absolute;
  width: 100%;
}
</style>

<style lang="css">
.v-carousel__controls__item {
  margin: 0px !important;
}

.v-btn--icon.v-size--small {
  height: 15px;
  width: 15px;
}

.v-carousel__item {
  overflow: visible;
}

.v-select__selection {
  justify-content: left;
}

.my-input > .v-input__control > .v-input__slot {
  border: 2px solid rgba(0, 0, 0, 0.54);
  border-radius: 100px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 24px;
  width: 95%;
}
.v-input__slot:focus {
  border: 2px solid #009688;
  border-radius: 100px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 24px;
  width: 95%;
}
.my-input > .v-input__control > .v-input__slot:hover {
  border: 2px solid #009688;
  border-radius: 100px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 24px;
  width: 95%;
}

.v-chip.v-size--default {
  border-top-left-radius: 0px;
  background-color: white !important;
}
.v-btn--fixed.v-btn--bottom {
  bottom: 82px;
  right: 75px;
}

.v-btn--fab.v-size--default {
  height: 65px;
  width: 65px;
}
</style>
