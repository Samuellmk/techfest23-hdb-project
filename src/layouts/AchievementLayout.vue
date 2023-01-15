<template>
  <div class="bg-grey-3">
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
        <q-list bordered class="rounded-borders" style="max-width: 600px">
          <q-item-label header>List of Achievements</q-item-label>

          <q-item v-for="achievement in achievements" :key="achievement.title">
            <q-item-section avatar top>
              <q-avatar>
                <img :src="`${achievement.img}`" />
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

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="12px"
                  flat
                  dense
                  round
                  icon="delete"
                />
                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                <q-btn size="12px" flat dense round icon="more_vert" />
              </div>
            </q-item-section>
          </q-item>

          <q-separator spaced />
        </q-list>
      </q-page-container>

      <q-footer class="bg-white"> </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { achievements } from './achievements';

const achievementsList: achievementsListProps[] = achievements;
</script>
