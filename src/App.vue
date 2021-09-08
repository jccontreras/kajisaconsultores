<template>
  <div id="app" class="container-fluid">
    <nav-bar-component v-bind:isclose="isclose"/>
    <div id="nav" class="row">
      <div id="top" class="col-2 color-menu shadow-lg p-3 mb-5">
        <top/>
      </div>
      <div class="col">
        <button v-if="isclose" class="navbar-toggler" type="button"
                style="position: relative"
                @click="openMenuJQ">
          <img src="@/assets/logo/openicon.png" style="max-height: 30px; max-width: 30px">
        </button>
        <button v-else class="navbar-toggler" type="button"
                style="position: relative"
                @click="openMenuJQ">
          <img src="@/assets/logo/closeicon.png" style="max-height: 30px; max-width: 30px">
        </button>
        <router-view/>
      </div>
    </div>
    <div id="wabtn">
      <label class="floatlblof">Oficina</label>
      <a title="Contáctanos Ahora!"
         href="https://api.whatsapp.com/send?phone=573057249133&text=Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
         class="float2" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <a class="floatx" @click="waChange" title="Cerrar" style="cursor: pointer">X</a>
      <label class="floatlbl24">24/7</label>
      <a title="Contáctanos Ahora!"
         href="https://api.whatsapp.com/send?phone=573138079966&text=Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
         class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
    <div id="contactbtn">
      <a title="Contáctanos Ahora!" style="cursor: pointer"
         class="float" @click="waChange">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
    <down/>
    <modal-abeas-data/>
  </div>
</template>

<script>
import Top from '@/components/menu/Top.vue';
import Down from '@/components/footer/Down.vue';
import ModalAbeasData from '@/components/abeasdata/ModalAbeasData.vue';
import NavBarComponent from '@/components/menu/NavBarComponent.vue';

const jq = require('jquery');

export default {
  name: 'App',
  components: {
    Top,
    Down,
    ModalAbeasData,
    NavBarComponent,
  },
  data() {
    return {
      isclose: false,
      waisclose: true,
    };
  },
  methods: {
    waChange() {
      if (this.waisclose) {
        jq('#wabtn').show(500);
        jq('#contactbtn').hide(500);
        this.waisclose = false;
      } else {
        jq('#wabtn').hide(500);
        jq('#contactbtn').show(500);
        this.waisclose = true;
      }
    },
    openMenuJQ() {
      if (this.isclose) {
        jq('#top')
          .show(500);
        this.isclose = false;
      } else {
        jq('#top')
          .hide(500);
        this.isclose = true;
      }
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $('#staticBackdrop')
      .modal('show');
    jq('#wabtn').hide(0);
  },
};
</script>

<style>
.color-menu {
  background-color: #dbd1d1;
  max-width: 300%;
  max-height: 700px;
}

#nav a.router-link-exact-active {
  color: #821518;
}

#nav a:hover {
  color: #821518;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.float2 {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 120px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.floatx {
  position: fixed;
  width: 10px;
  height: 10px;
  bottom: 125px;
  right: 120px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  z-index: 100;
}

.floatlblof {
  position: fixed;
  width: 10px;
  height: 10px;
  bottom: 190px;
  right: 90px;
  color: #000000;
  text-align: center;
  font-size: 20px;
  z-index: 100;
}

.floatlbl24 {
  position: fixed;
  width: 10px;
  height: 10px;
  bottom: 100px;
  right: 80px;
  color: #000000;
  text-align: center;
  font-size: 20px;
  z-index: 100;
}

.float:hover {
  text-decoration: none;
  color: #25d366;
  background-color: #fff;
}

.my-float {
  margin-top: 16px;
}

</style>
