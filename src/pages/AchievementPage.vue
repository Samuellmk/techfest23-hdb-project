<template>
  <q-page class="bg-grey-3">
    <div class="row justify-between bg-white q-pa-md">
      <div class="column">
        <div class="text-weight-medium text-subtitle">Points Balance</div>
        <div class="text-h5 row items-center text-weight-bold">
          <q-icon name="o_savings" class="q-pr-sm" size="md" />
          {{ store.points }}
        </div>
      </div>
      <div class="items-center row">
        <q-btn
          unelevated
          color="blue-7"
          label="Redeem"
          @click="onRedemptionClick()"
        />
      </div>
    </div>
    <q-list bordered class="rounded-borders" style="max-width: 600px">
      <q-item
        v-for="achievement in achievementRef"
        :key="achievement.title"
        ref="itemsToRef"
        class="bg-white q-mb-xs"
      >
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
          <q-btn
            unelevated
            :color="!achievement.complete ? 'grey-6' : 'green-7'"
            size="md"
            icon="done"
            :disable="achievement.redeem"
            @click="onClickMark(achievement)"
          />
        </q-item-section>
      </q-item>

      <q-separator spaced />
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { achievements } from './achievements';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';

interface Achievement {
  id: number;
  title: string;
  desc: string;
  img: string;
  captions: string;
  reported: number;
  visited: number;
  points: number;
  complete: boolean;
  redeem: boolean;
}
const itemsToRef = ref();
const store = useUserStore();

const achievementRef = ref(achievements);

const onClickMark = (achievement: Achievement) => {
  store.incrementPoints(achievement.points);
  achievementRef.value.find((a: Achievement) => {
    if (a.id === achievement.id) a.redeem = true;
  });
};

const router = useRouter();
const onRedemptionClick = () => {
  router.push('/redemption');
};
</script>
