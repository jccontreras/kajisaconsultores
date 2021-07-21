<template>
  <div class="container">
    <div class="jumbotron" style="background-color: #dbd1d1">
      <h1 class="display-5" style="color: darkred">Nuevo Decreto N° 688 de 2021</h1>
      <label class="lead">Presidente Duque firma decreto que otorga beneficios
        a las empresas que contraten jóvenes entre los 18 y los 28 años.</label>
      <hr class="my-4">
      <label>Para más información puede ver la
        <a href="https://twitter.com/NoticiasCaracol/status/1408130994830561288?s=08" target="_blank">Noticia</a>
      </label>
      <br>
      <a class="btn btn-primary btn-md" target="_blank"
         href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20688%20DEL%2024%20DE%20JUNIO%20DE%202021.pdf"
         role="button">Ver Decreto</a>
    </div>
    <modal-dec688/>
  </div>
</template>

<script>
import ModalDec688 from '@/components/news/decreto688/ModalDec688.vue';

export default {
  name: 'ContentNews',
  components: {
    ModalDec688,
  },
  methods: {
    openDec688() {
      // eslint-disable-next-line no-undef
      $('#dec688Modal')
        .modal('show');
    },
  },
};
</script>
