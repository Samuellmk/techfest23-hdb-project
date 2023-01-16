<template>
  <q-page class="items-center justify-evenly">
    <q-pull-to-refresh @refresh="refresh">
      <q-list v-for="post in posts" :key="post.id">
        <q-item
          clickable
          v-ripple
          class="no-padding"
          @click="onPostClick(post)"
        >
          <post-component :post="post" class="fit" />
        </q-item>
        <q-separator />
      </q-list>
    </q-pull-to-refresh>
  </q-page>
</template>

<script setup lang="ts">
import PostComponent from 'components/PostComponent.vue';
import { useRouter } from 'vue-router';
import PocketBase from 'pocketbase';
import { PBPostModel } from './creation-interface';
import { onMounted, Ref, ref } from 'vue';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const router = useRouter();

const refresh = async (done: any) => {
  await fetchPosts();
  done();
};

const onPostClick = (postObj: PBPostModel) => {
  router.push({
    name: 'posts',
    params: { postId: postObj.id },
  });
};
const posts: Ref<PBPostModel[]> = ref([]);
//const posts = MOCK_POSTS;

const fetchPosts = async () => {
  const postsUnsorted = (await pb
    .collection('posts')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    })) as PBPostModel[];

  posts.value = postsUnsorted.sort((a, b) => b.votes - a.votes);
};

onMounted(async () => {
  fetchPosts();
});
</script>
