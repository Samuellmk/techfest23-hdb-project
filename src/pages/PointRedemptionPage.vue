<template>
  <q-page class="bg-blue-grey-2">
    <div class="q-pa-md row items-start q-gutter-md">
      <div>
        <div class="text-h6">Points Redemption</div>
        <div>What would you like to redeem right now?</div>
        <div>Points:</div>
      </div>
      <q-card
        v-for="redemption in redemptions"
        :key="redemption.discountName"
        class="my-card col-5"
      >
        <q-card-section :class="`bg-${redemption.color}`">
          <div class="text-h8 wrap">
            {{ redemption.discountName }}
          </div>
          <div class="text-subtitle2">{{ redemption.pointsDeduct }} Points</div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="center">
          <q-btn flat>Redeem</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card col-5">
        <q-card-section class="bg-deep-purple-8 text-white">
          <div class="text-h8 wrap">$10 Season Parking Discount</div>
          <div class="text-subtitle2">75 Points</div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="center">
          <q-btn flat>Redeem</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card col-5">
        <q-card-section class="bg-deep-orange-8 text-white">
          <div class="text-h8 text-white wrap">$15Season Parking Discount</div>
          <div class="text-subtitle2">125 Points</div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="center">
          <q-btn flat>Redeem</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { redemptions } from './redemptions';
</script>
