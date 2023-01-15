<template>
  <div class="">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>
            Quasar Framework
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

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

      <q-page-container>
        <q-page class="q-pa-md"> Hi my name is nino </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('images');
</script>

<style scoped>
:deep(.q-tab__icon) {
  font-size: 2.3em;
}

:deep(.q-tab__label) {
  font-size: 0.8em;
}
</style>
