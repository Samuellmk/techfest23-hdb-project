<template>
  <q-page class="items-center justify-evenly">
    <div id="map" style="max-height" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
onMounted(() => {
  mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
  var map = new mapboxgl.Map({
    container: document.getElementById('map'),
    center: [103.851959, 1],
    minZoom: 10,
    style: 'mapbox://styles/mapbox/streets-v11',
  });
});
</script>

<!-- <template>
  <q-page class="items-center justify-evenly">
    <mapbox-map :accessToken="myAccessToken" mapStyle="light-v10" />
  </q-page>
</template>

<script setup lang="ts">
import { MapboxMap } from 'vue-mapbox-ts';
const myAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
</script> -->
