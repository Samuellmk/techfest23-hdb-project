<template>
  <div class="">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar elevated>
          <q-toolbar-title class="text-center">
            <q-avatar size="30px">
              <img src="src\assets\hdb.png" />
            </q-avatar>
            Achievements
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-item clickable v-ripple class="bg-grey-2">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/chaosmonkey.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label> Mini Adventurer </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                5 Locations Visited
                <q-icon name="warning" size="14px" class="q-ml-xs" />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>Completed</span>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-grey-2">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/chaosmonkey.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label> The Best of the Best </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                30 Locations Visited
                <q-icon name="warning" size="14px" class="q-ml-xs" />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>Completed</span>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-grey-2">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/chaosmonkey.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label> Fault Master </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                5 Faults Reported
                <q-icon name="warning" size="14px" class="q-ml-xs" />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>Not Completed</span>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-grey-2">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/chaosmonkey.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label> King of All Faults </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                10 Faults Reported
                <q-icon name="warning" size="14px" class="q-ml-xs" />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>Not Completed</span>
          </q-item-section>
        </q-item>
        <q-page class="q-pa-md"> Hi my name is nino </q-page>
      </q-page-container>

      <q-footer class="bg-white"> </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>
