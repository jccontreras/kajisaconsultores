<template>
  <div id="app" class="container-fluid">
    <div class="col align-self-end" style="text-align: end">
      <a class="navbar-brand" href="https://www.facebook.com/kajisaconsultores/" target="_blank">
        <img src="@/assets/logo/Facebook.png" width="24" height="24" alt="">
      </a>
      <a class="navbar-brand"
         href="https://www.instagram.com/kajisaconsultores/?igshid=cojsssbm4k6h&fbclid=IwAR31-v3BbD6XKuAxnWIJcic_zzKQ4n1ZB6eiXGgRjWbtY_BvvVX_36EE4fY"
         target="_blank">
        <img src="@/assets/logo/Instagram.png" width="24" height="24" alt="">
      </a>
      <a class="navbar-brand"
         href="https://twitter.com/KajisaConsultor?s=08&fbclid=IwAR3wptceW3-GToO2nzQTyl0BoAhhXsmvkGJez5g0_j9X-BrwvzlWFN1nskY"
         target="_blank">
        <img src="@/assets/logo/Twitter.png" width="24" height="24" alt="">
      </a>
      <a class="navbar-brand"
         href="https://www.linkedin.com/company/kajisa-consultores"
         target="_blank">
        <img src="@/assets/logo/Linckedin.png" width="24" height="24" alt="">
      </a>
      <a class="navbar-brand" href="https://www.youtube.com/channel/UCFjbIJsqnmMAseB-vX8wGvg" target="_blank">
        <img src="@/assets/logo/Youtube.png" width="24" height="24" alt="">
      </a>
    </div>
    <div id="nav" class="row">
      <div id="top" class="col-2 color-menu" style="max-width: 300%">
        <top/>
      </div>
      <div class="col" style="top: 20px">
        <button v-if="isclose" class="navbar-toggler" type="button" data-toggle="collapse"
           data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation" style="position: relative"
                @click="openMenuJQ">
          <img src="@/assets/logo/openicon.png" style="max-height: 30px; max-width: 30px">
        </button>
        <button v-else class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation" style="position: relative"
          @click="openMenuJQ">
          <img src="@/assets/logo/closeicon.png" style="max-height: 30px; max-width: 30px">
        </button>
        <router-view/>
      </div>
    </div>
    <a title="Contáctanos Ahora!" href="https://api.whatsapp.com/send?phone=573057249133&text=Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
    </a>
    <down/>
    <modal-abeas-data/>
  </div>
</template>

<script>
import Top from '@/components/menu/Top.vue';
import Down from '@/components/footer/Down.vue';
import ModalAbeasData from '@/components/abeasdata/ModalAbeasData.vue';

const jq = require('jquery');

export default {
  name: 'App',
  components: {
    Top,
    Down,
    ModalAbeasData,
  },
  data() {
    return {
      isclose: false,
    };
  },
  methods: {
    openMenuJQ() {
      if (this.isclose === true) {
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
  },
};
</script>

<style>
.color-menu {
  background-color: #dbd1d1;
}

#nav a.router-link-exact-active {
  color: #821518;
}

.float{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 2px 2px 3px #999;
  z-index:100;
}
.float:hover {
  text-decoration: none;
  color: #25d366;
  background-color:#fff;
}

.my-float{
  margin-top:16px;
}
</style>
