<template>
  <GmapMap
    :center="{lat:4.703581, lng:-74.090251}"
    :zoom="18"
    map-type-id="roadmap"
    style="min-width: 100%; height: 500px"
  >
    <GmapMarker
      :key="index"
      :position="google && new google.maps.LatLng(4.703581, -74.090251)"
      :clickable="true"
      :draggable="true"
      :label="labelmap"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'ContentMap',
  computed: {
    google: gmapApi,
  },
  data() {
    return {
      labelmap: 'Kajisa Consultores S.A.S.',
    };
  },
};
</script>

<GmapMap
  :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: true,
   streetViewControl: true,
   rotateControl: true,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
>
</GmapMap>
