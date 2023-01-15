<template>
  <q-page class="items-center justify-evenly">
    <q-list v-for="post in posts" :key="post.id">
      <q-item clickable v-ripple class="no-padding">
        <post-component :post="post" class="fit" />
      </q-item>
      <q-separator />
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import PostComponent from 'components/PostComponent.vue';
import MOCK_POSTS from './POST_DATA.json';

const posts = MOCK_POSTS;
</script>
