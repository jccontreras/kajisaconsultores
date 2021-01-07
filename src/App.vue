<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div v-if="isOpen" class="col-2" style="max-width: 50%"><top/></div>
      <div class="col" style="top: 20px">
        <button v-if="isOpen" class="navbar-toggler" type="button" data-toggle="collapse"
           data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation" style="position: relative"
                @click="openMenu">
          <img src="@/assets/logo/closeMenu.png" style="max-height: 30px; max-width: 30px">
        </button>
        <button v-else class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation" style="position: relative"
          @click="openMenu">
          <img src="@/assets/logo/openMenu.png" style="max-height: 30px; max-width: 30px">
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
import { mapMutations, mapState } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'App',
  components: {
    Top,
    Down,
    ModalAbeasData,
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.Menu.isopen,
    }),
  },
  methods: {
    ...mapMutations({
      openMenu: constants.OPEN_MENU,
      closeMenu: constants.CLOSE_MENU,
    }),
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
