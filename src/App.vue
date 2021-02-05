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
    <div class="row">
      <div id="top" class="col-2" style="max-width: 50%">
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
.container-fluid {
  background-color: #e0d9d9;
}
</style>
