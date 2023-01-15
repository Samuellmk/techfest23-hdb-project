<template>
  <div class="">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar elevated>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="src\assets\hdb.png" />
            </q-avatar>
            HDB Project
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md"> Hi my name is nino </q-page>
      </q-page-container>

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

      <q-footer class="bg-white">
        <q-tabs
          no-caps
          active-color="black"
          indicator-color="transparent"
          class="text-grey"
          v-model="tab"
        >
          <q-tab :ripple="false" name="home" icon="home" label="Home" />
          <q-tab :ripple="false" name="videos" icon="add_box" label="Create" />
          <q-tab
            :ripple="false"
            name="inbox"
            icon="notifications"
            label="Inbox"
          />
        </q-tabs>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const tab = ref('images');

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

  {
    title: 'Geylang East Central Car Park',
    caption: 'Near-by Car Park',
    icon: 'local_parking',
    link: '',
  },

  {
    title: 'Old Airport Hawker Centre Car Park',
    caption: 'Near-by Car Park',
    icon: 'local_parking',
    link: '',
  },

  {
    title: 'Block 121',
    caption: 'Near-by Block',
    icon: 'location_city',
    link: '',
  },

  {
    title: 'Geylang East Library Car Park',
    caption: 'Near-by Car Park',
    icon: 'local_parking',
    link: '',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
:deep(.q-tab__icon) {
  font-size: 2.3em;
}

:deep(.q-tab__label) {
  font-size: 0.8em;
}
</style>
