<template>
  <div class="q-px-md q-py-sm">
    <div class="row q-gutter-x-md">
      <div class="column q-gutter-y-sm col">
        <div class="row items-center">
          <q-icon name="style" class="q-mr-xs" />
          <div class="text-subtitle q-mr-sm">{{ props.post.community }}</div>
          <div class="text-subtitle text-grey-7 q-mr-sm">•</div>
          <div class="text-subtitle text-grey-7">
            {{ getDateTimeDiff(props.post.created) }}
          </div>
        </div>
        <p>
          {{ props.post.title }}
        </p>
        <div class="row justify-between">
          <div class="row items-center justify-start">
            <q-btn flat color="grey-8" icon="add" padding="xs" size="sm" />
            <div class="text-grey-8">{{ props.post.votes }}</div>
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
            <div class="text-grey-8">{{ props.post.comments.length }}</div>
          </div>
          <div class="row items-center">
            <q-btn flat color="grey-8" icon="o_share" padding="xs" size="sm" />
            <div class="text-grey-8">Share</div>
          </div>
        </div>
      </div>
      <div class="col-4 center">
        <q-img
          :src="
            props.post.imagelink === ''
              ? props.post.imagestring
              : props.post.imagelink
          "
          :ratio="16 / 9"
          fit="contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PBPostModel } from 'src/pages/creation-interface';
import moment from 'moment';
const props = defineProps<{
  post: PBPostModel;
}>();

const getDateTimeDiff = (created: string | Date) => {
  const now = moment().local();
  const from = moment.utc(created).local();
  const diff = now.diff(from, 'minutes');
  if (diff <= 60) return Math.floor(diff) + 'm';
  else if (diff <= 24 * 60) {
    return Math.floor(diff / 60) + 'h';
  }
  return Math.floor(diff / 24 / 60) + 'd';
};
</script>

<style scoped></style>
