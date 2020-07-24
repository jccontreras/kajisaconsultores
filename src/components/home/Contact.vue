<template>
  <div class="accordion" id="accordionExample">
    <div class="card cardhome">
      <div class="card-header">
        <h5>Contactanos</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   placeholder="name@correo.com">
            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo con
              nadie
              más.</small>
          </div>
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label>Número de contacto</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label>Cuéntanos tus problemas</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style>
  .cardhome {
    background-color: #e0d9d9;
    color: #4b4545;
  }
</style>
