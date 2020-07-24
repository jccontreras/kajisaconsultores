<template>
  <div id="app" class="container-fluid">
    <top/>
    <router-view/>
    <down></down>
    <modal-abeas-data/>
  </div>
</template>

<script>
import Top from '@/components/menu/Top.vue';
import Down from '@/components/footer/Down.vue';
import ModalAbeasData from '@/components/abeasdata/ModalAbeasData.vue';

export default {
  name: 'App',
  components: {
    Top,
    Down,
    ModalAbeasData,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $('#staticBackdrop').modal('show');
  },
};
</script>

<style>
  .container-fluid {
    background-color: #e0d9d9;
  }
</style>
