<template>
  <div class="bg-white q-gutter-y-md">
    <div class="q-px-md q-py-sm column q-gutter-y-lg col">
      <div class="row items-center">
        <q-avatar
          icon="style"
          class="q-mr-xs"
          color="blue-3"
          text-color="red-8"
          size="36px"
        />
        <div class="col text-grey-9" style="line-height: 0.85rem">
          <div class="q-pm-none text-weight-medium">{{ post?.community }}</div>
          <div class="row">
            <div class="text-subtitle q-mr-sm">{{ post?.username }}</div>
            <div class="text-subtitle text-grey-7 q-mr-sm">•</div>
            <div class="text-subtitle text-grey-7">{{ post?.created }}</div>
          </div>
        </div>
      </div>
      <div class="text-h6" style="line-height: normal">
        {{ post?.title }}
      </div>
      <div class="text-subtitle" style="line-height: normal">
        {{ post?.description }}
      </div>
    </div>
    <q-img src="http://dummyimage.com/600x500.png/dddddd/000000" />
    <div class="row justify-between q-pa-sm">
      <div class="row items-center justify-start">
        <q-btn flat color="grey-8" icon="add" padding="xs" size="sm" />
        <div class="text-grey-8">{{ post?.votes }}</div>
        <q-btn flat color="grey-8" icon="remove" padding="xs" size="sm" />
      </div>
      <div class="row items-center">
        <q-btn
          flat
          color="grey-8"
          icon="o_chat_bubble"
          padding="xs"
          size="sm"
        />

        <div class="text-grey-8">{{ post?.comments.length }}</div>
      </div>
      <div class="row items-center">
        <q-btn flat color="grey-8" icon="o_share" padding="xs" size="sm" />
        <div class="text-grey-8">Share</div>
      </div>
      <div class="row items-center q-pr-sm">
        <q-btn flat color="grey-8" icon="done" padding="xs" size="sm" />
        <div class="text-grey-8">Done</div>
      </div>
    </div>
  </div>
  <comment :comment="comment" v-for="comment of comments" :key="comment.id" />
  <q-space class="q-pt-xs" />
</template>

<script setup lang="ts">
import Comment from './PostViewMoreCommentComponent.vue';
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PostModel } from 'src/components/models';
import POST_DATA from 'src/pages/POST_DATA.json';
import { comment } from 'postcss';
import { QAvatar, QImg, QBtn, QSpace } from 'quasar';
import { PBCommentModel, PBPostModel } from 'src/pages/creation-interface';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const route = useRoute();
const posts: Ref<PBPostModel[]> = ref([]);
const post: Ref<PBPostModel | undefined> = ref();

const comments: Ref<PBCommentModel[]> = ref([]);

const fetchPost = (id: string) => {
  return posts.value.find((e) => e.id === id);
};

onMounted(async () => {
  posts.value = (await pb
    .collection('posts')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    })) as PBPostModel[];
  post.value = posts.value.find(
    (e) => e.id === route.params.postId
  ) as PBPostModel;

  comments.value = (await pb
    .collection('comments')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    })) as PBCommentModel[];

  comments.value = comments.value.filter((item) =>
    post.value?.comments.includes(item.id)
  );
});
</script>

<style scoped></style>
