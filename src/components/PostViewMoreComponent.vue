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
          <div class="q-pm-none text-weight-medium">community</div>
          <div class="row">
            <div class="text-subtitle q-mr-sm">username</div>
            <div class="text-subtitle text-grey-7 q-mr-sm">•</div>
            <div class="text-subtitle text-grey-7">5h</div>
          </div>
        </div>
      </div>
      <div class="text-h6" style="line-height: normal">
        My Budget setup just got set up tonight. Explanation in comments
      </div>
      <div class="text-subtitle" style="line-height: normal">
        This is a description
      </div>
    </div>
    <q-img src="http://dummyimage.com/600x500.png/dddddd/000000" />
    <div class="row justify-between q-pa-sm">
      <div class="row items-center justify-start">
        <q-btn flat color="grey-8" icon="add" padding="xs" size="sm" />
        <div class="text-grey-8">23</div>
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
        <div class="text-grey-8">23</div>
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
  <comment />
  <comment />
  <comment />
</template>

<script setup lang="ts">
import Comment from './PostViewMoreCommentComponent.vue';
import AddComment from './PostViewMoreAddCommentComponent.vue';
</script>

<style scoped></style>
