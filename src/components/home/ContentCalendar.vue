<template>
  <div class="card cardhome my-4" style="border: #e0d9d9">
    <div class="card-body shadow-lg p-3 mb-5" style="background-color: #dbd1d1;">
      <h5 class="card-title">Calendario Renta Personas Naturales 2020</h5>
      <div class="container" style="max-height: 300px; overflow-y: auto">
        <div class="row row-striped" v-for="item in items" v-bind:key="item.index">
          <div class="col-2 text-right">
            <h2 class="display-8">
              <span class="badge badge-secondary">{{item.day}}</span>
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
  props: {
    msg: String,
  },
  computed: {
    items() {
      return datos.map((item) => item);
    },
  },
};
</script>

<style lang="scss" type="text/css" ref="styles.css"/>
