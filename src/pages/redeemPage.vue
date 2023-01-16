<template>
  <q-page class="bg-blue-grey-2">
    <div class="text-center">
      <div>
        <div class="text-h6">QR Code Redemption</div>
        <div class="text-center">Here is your QR code!</div>
        <img src="src\assets\Discount.svg" />
      </div>
    </div>
    <div class="q-pa-md row items-start q-gutter-md"></div>
  </q-page>
</template>

<script setup lang="ts">
import { redemptions } from './redemptions';
import { userStore } from 'src/stores/user-store';

const user = userStore();
</script>
