<template>
  <footer class="page-footer extend font-small blue pt-4">
    <img v-if="sizescreen()" class="footsize" src="@/assets/footer/Footer.jpg" style="width: 100%;
    height: 200px">
    <img v-else class="footsize" src="@/assets/footer/Footer2.jpg" style="width: 100%;
    height: 100px">
  </footer>
</template>

<script>
export default {
  name: 'Down',
  methods: {
    sizescreen() {
      if (window.screen.availWidth > 720) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
  .footsize {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    align-content: center;
}
</style>
