<template>
  <q-page class="bg-grey-3">
    <q-item :clickable="true" @click="onRedemptionClick()">
      <q-item-section> Points Available:</q-item-section>
      <q-item-section> {{ user.points }} </q-item-section>
    </q-item>

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
            <span class="text-weight-bold">{{ achievement.title }}</span>
          </q-item-label>
          <q-item-label lines="1">
            <span class="text-grey-8"> {{ achievement.desc }}</span>
          </q-item-label>
          <q-item-label lines="1">
            <span class="text-weight-bold text-capitalize"
              >{{ achievement.points }} Points Reward</span
            >
          </q-item-label>
          <q-item-label caption lines="1">
            {{ achievement.captions }}
          </q-item-label>
          <q-item-label
            lines="1"
            class="q-mt-xs text-body2 text-weight-bold text-uppercase"
            :class="achievement.complete ? 'text-green' : 'text-red'"
          >
            <span>{{ achievement.complete ? 'Complete' : 'Incomplete' }}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn class="xs" size="12px" icon="done" />
        </q-item-section>
      </q-item>

      <q-separator spaced />
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import vuePlugin from '@vitejs/plugin-vue';
import { ref } from 'vue';
import { achievements } from './achievements';
import { useRouter } from 'vue-router';
import { userStore } from 'src/stores/user-store';

const user = userStore();

const router = useRouter();
const onRedemptionClick = () => {
  router.push('/redemption');
};
</script>
