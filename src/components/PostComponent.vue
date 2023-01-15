<template>
  <div class="q-px-md q-py-sm">
    <div class="row q-gutter-x-md">
      <div class="column q-gutter-y-sm col">
        <div class="row items-center">
          <q-icon name="style" class="q-mr-xs" />
          <div class="text-subtitle q-mr-sm">{{ props.post.community }}</div>
          <div class="text-subtitle text-grey-7 q-mr-sm">•</div>
          <div class="text-subtitle text-grey-7">
            {{ props.post.last_posted }}h
          </div>
        </div>
        <p>
          {{ props.post.title }}
        </p>
        <div class="row justify-between">
          <div class="row items-center justify-start">
            <q-btn flat color="grey-8" icon="add" padding="xs" size="sm" />
            <div color="grey-8">{{ props.post.votes }}</div>
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
            <div color="grey-8">{{ props.post.comments }}</div>
          </div>
          <q-btn
            flat
            color="grey-8"
            icon="o_share"
            padding="xs"
            size="sm"
            label="share"
          />
        </div>
      </div>
      <div class="col-4 center">
        <q-img :src="`${props.post.image}`" :ratio="16 / 9" fit="contain" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostModel } from './models';
const props = defineProps<{
  post: PostModel;
}>();
</script>

<style scoped></style>
