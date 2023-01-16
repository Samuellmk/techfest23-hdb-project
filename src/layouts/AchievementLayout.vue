<template>
  <div class="bg-grey-3">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center"> Achievements </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-list bordered class="rounded-borders" style="max-width: 600px">
        <q-item-label header>List of Achievements</q-item-label>

        <q-item v-for="achievement in achievements" :key="achievement.title">
          <q-item-section avatar top>
            <q-avatar>
              <img :src="`${achievement.img}`" alt="Image of Achievement" />
            </q-avatar>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">{{ achievement.title }}</span>
            </q-item-label>
            <q-item-label lines="1">
              <span class="text-grey-8"> - {{ achievement.desc }}</span>
            </q-item-label>
            <q-item-label caption lines="1">
              {{ achievement.captions }}
            </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-uppercase"
              :class="achievement.complete ? 'text-green' : 'text-red'"
            >
              <span>{{
                achievement.complete ? 'Complete' : 'Incomplete'
              }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-btn class="xs" size="12px" icon="done" />
          </q-item-section>
        </q-item>

        <q-separator spaced />
      </q-list>

      <q-footer class="bg-white"> </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { achievements } from './achievements';
</script>
