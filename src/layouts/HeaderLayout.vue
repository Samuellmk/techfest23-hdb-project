<template>
  <q-layout view="lHh lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar elevated class="no-padding">
        <q-btn
          flat
          icon="arrow_back"
          aria-label="back"
          color="black"
          @click="() => router.back()"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-grey-2">
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer class="bg-white shadow-up-3" style="border-radius: 15px 15px 0 0">
      <q-input
        for="addComment"
        outlined
        v-model="commentValue"
        placeholder="Add a comment..."
        dense
        class="q-pa-md"
        autogrow
      />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const commentValue = ref('');
const router = useRouter();
</script>
‹

<style>
.q-field--outlined.q-field--highlighted .q-field__control:after {
  display: none;
}
</style>
