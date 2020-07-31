<template>
  <div class="card cardhome">
    <div class="card-header">
      <h5>Contactanos</h5>
    </div>
    <div class="card-body">
      <div class="alert alert-danger" role="alert" v-if="error">
        <h4 class="alert-heading">Ups!</h4>
        <label>Hubo un problema al enviar tu requerimiento</label>
        <hr>
        <label class="mb-0">Por favor intentalo de nuevo más tarde.</label>
      </div>
      <div class="alert alert-success" role="alert" v-if="sent">
        <h4 class="alert-heading">Listo!</h4>
        <label>Tenemos tu requerimiento</label>
        <hr>
        <label class="mb-0">Nos pondremos en contacto lo más pronto posible.</label>
      </div>
      <form @submit.prevent="send" v-else>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" class="form-control" id="email"
                 placeholder="name@correo.com" autocomplete="off" v-model="contact.email" required>
          <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo con
            nadie
            más.</small>
        </div>
        <div class="form-group">
          <label for="name">Nombre Completo</label>
          <input type="text" class="form-control" id="name" autocomplete="off"
                 v-model="contact.name" required>
        </div>
        <div class="form-group">
          <label for="phone">Número de contacto</label>
          <input type="tel" class="form-control" id="phone" autocomplete="off"
                 v-model="contact.phone" required>
        </div>
        <div class="form-group">
          <label for="trouble">Cuéntanos tus problemas</label>
          <textarea class="form-control" id="trouble" autocomplete="off"
                    v-model="contact.trouble" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="enviar">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      sent: false,
      error: false,
      contact: {
        name: null,
        email: null,
        phone: null,
        trouble: null,
      },
    };
  },
  watch: {
    sent(val) {
      setTimeout(() => {
        if (val) this.sent = false;
      }, 3000);
    },
    error(val) {
      setTimeout(() => {
        if (val) this.error = false;
      }, 3000);
    },
  },
  methods: {
    send() {
      this.$fb.functions().httpsCallable('sendForm')({
        subject: 'Nuevo Mensaje de la PáginaWeb',
        text: `Please contact ${this.contact.name} at ${this.contact.email}. Their problem is ${this.contact.trouble}. Their phone is ${this.contact.phone}.`,
        html: `Por favor contactar a <strong>${this.contact.name}</strong> al correo <strong>${this.contact.email}</strong>. <br/> Tiene el siguiente problema: <br/> <strong>${this.contact.trouble}</strong> .<br/>Su número telefónico es: <strong>${this.contact.phone}</strong>`,
      })
        .then(() => {
          this.sent = true;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.contact.name = null;
          this.contact.email = null;
          this.contact.phone = null;
          this.contact.trouble = null;
        });
    },
  },
};
</script>

<style lang="scss">
  .cardhome {
    background-color: #e0d9d9;
    color: #4b4545;
  }
</style>
