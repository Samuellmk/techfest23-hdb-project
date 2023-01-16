<template>
  <q-page class="grey-2">
    <div class="column justify-center items-center full-width q-py-md">
      <div class="text-weight-medium text-subtitle">Balance</div>
      <div class="text-h5 row items-center text-weight-bold">
        <q-icon name="o_savings" class="q-pr-sm" size="md" />
        {{ store.points }}
      </div>
    </div>

    <div class="row full-width justify-center">
      <q-card
        v-for="redemption in redemptions"
        :key="redemption.discountName"
        class="col-5 q-ma-sm"
      >
        <q-card-section :class="`bg-${redemption.color}`">
          <div class="text-subtitle wrap">
            {{ redemption.discountName }}
          </div>
          <div class="text-subtitle2 text-weight-bold">
            {{ redemption.pointsDeduct }} Points
          </div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="center">
          <q-btn
            flat
            @click="onRedeemClick(redemption.pointsDeduct)"
            class="text-subtitle2 text-weight-bold"
            :color="checkPoints(redemption.pointsDeduct) ? 'grey' : 'black'"
            label="Redeem"
            :disable="checkPoints(redemption.pointsDeduct)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { redemptions } from './redemptions';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';

const store = useUserStore();
const router = useRouter();

const checkPoints = (points: number) => {
  return store.points <= points;
};

const onRedeemClick = (deductPoints: number) => {
  store.decrementPoints(deductPoints);
  router.push('/redeem');
};
</script>

<style scoped></style>
