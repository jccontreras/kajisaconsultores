<template>
  <div class="card cardhome my-4" style="border: #e0d9d9">
    <div class="card-body shadow-lg p-3 mb-5" style="background-color: #dbd1d1;">
      <div class="row">
        <div class="col-md">
          <h5 class="card-title">Calendario Renta Personas Naturales 2020</h5>
        </div>
        <div class="col-md">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Ultimos dos números de su cédula"
                   aria-label="Recipient's username" aria-describedby="basic-addon2" id="search"
                   v-model="search">
            <div class="input-group-append">
              <span class="input-group-text search">Buscar mi cédula</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="max-height: 300px; overflow-y: auto">
        <div class="row row-striped" v-for="item in items" v-bind:key="item.index">
          <div class="col-2 text-right">
            <h2 class="display-8">
              <span class="badge badge-secondary">{{ item.day }}</span>
            </h2>
            <h5 style="max-font-size: 100%">{{ item.month }}</h5>
          </div>
          <div class="col-10">
            <h6 class="text-uppercase"><strong> Fecha máxima de presentación</strong></h6>
            <h6 class="text-uppercase">Cédulas terminadas en</h6>
            <h6 class="text-uppercase">{{ item.cedulas }}</h6>
            <label>Vence la declaración de renta y complementarios</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from '@/assets/json/calendarRP2020.json';

export default {
  name: 'ContentCalendar',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    items() {
      // return datos.map((item) => item);
      return datos.filter((item) => item.cedulas.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
};
</script>

<style lang="scss" type="text/css" ref="styles.css">
.search {
  background-color: #6c757d;
  color: white;
}
</style>
