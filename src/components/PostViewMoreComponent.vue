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
            <div class="text-subtitle text-grey-7">{{ post?.time }}</div>
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
  <comment
    :comment="comment"
    v-for="comment of post?.comments"
    :key="comment.username"
  />
  <q-space class="q-pt-xs" />
</template>

<script setup lang="ts">
import Comment from './PostViewMoreCommentComponent.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PostModel } from 'src/components/models';
import POST_DATA from 'src/pages/POST_DATA.json';

const route = useRoute();
const post = ref<PostModel>();

const fetchPost = (id: number) => {
  return POST_DATA.find((e) => e.id === id);
};

onMounted(async () => {
  console.log(route.params.postId);
  post.value = await fetchPost(Number(route.params.postId));
});
</script>

<style scoped></style>
