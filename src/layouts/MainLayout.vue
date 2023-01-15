<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> HDB Project </q-toolbar-title>

        <div>HDB v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Your Communities </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Block 123',
    caption: 'Your Current Block',
    icon: 'location_city',
    link: '',
  },
  {
    title: 'Car Park 123A',
    caption: 'Your Current Car Park',
    icon: 'local_parking',
    link: '',
  },
  {
    title: 'Car Park 124B',
    caption: 'Near-by Car Park',
    icon: 'local_parking',
    link: '',
  },

  {
    title: 'Block 124',
    caption: 'Near-by Block',
    icon: 'location_city',
    link: '',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
