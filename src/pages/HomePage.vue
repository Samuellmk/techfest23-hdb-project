<template>
  <q-page class="items-center justify-evenly">
    <q-list v-for="post in posts" :key="post.id">
      <q-item clickable v-ripple class="no-padding" @click="onPostClick(post)">
        <post-component :post="post" class="fit" />
      </q-item>
      <q-separator />
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import PostComponent from 'components/PostComponent.vue';
import { PostModel } from 'src/components/models';
import { useRouter } from 'vue-router';
import MOCK_POSTS from './POST_DATA.json';
import PocketBase from 'pocketbase';
import { PBPostModel } from './creation-interface';
import { onMounted, Ref, ref } from 'vue';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const router = useRouter();

const onPostClick = (postObj: PBPostModel) => {
  router.push({
    name: 'posts',
    params: { postId: postObj.id },
  });
};
const posts: Ref<PBPostModel[]> = ref([]);
//const posts = MOCK_POSTS;
onMounted(async () => {
  posts.value = (await pb
    .collection('posts')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    })) as PBPostModel[];
});
</script>
