<template>
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
       tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Aceptación Habeas Data</h5>
        </div>
        <div class="modal-body">
          Ley de Protección de Datos Personales:

          “La autorización suministrada en el presente texto faculta a Kajisa Consultores S.A.S
          para que dé a
          sus datos aquí recopilados el tratamiento señalado en la “Política de Privacidad para el
          Tratamiento de Datos Personales” de Kajisa Consultores S.A.S, el cual incluye, entre
          otras, el envío de
          información promocional, así como la invitación a eventos. El titular de los datos podrá,
          en cualquier momento, solicitar que la información sea modificada, actualizada o retirada
          de las bases de datos de Kajisa Consultores S.A.S.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Acepto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalAbeasData',
};
</script>
