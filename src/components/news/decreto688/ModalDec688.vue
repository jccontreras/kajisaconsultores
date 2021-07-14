<template>
  <div class="modal fade" id="dec688Modal" data-backdrop="static" data-keyboard="false"
       tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Decreto N° 688 de 2021</h5>
        </div>
        <div class="modal-body">
          <pdf src="@/assets/news/decreto688.pdf"></pdf>
          <!--vue-pdf-app pdf="file:///home/ragnarok/Downloads/decreto688.pdf"></vue-pdf-app-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePdfApp from 'vue-pdf-app';
import pdf from 'vue-pdf';

export default {
  name: 'ModalDec688',
  components: {
    // VuePdfApp,
    pdf,
  },
};
</script>
