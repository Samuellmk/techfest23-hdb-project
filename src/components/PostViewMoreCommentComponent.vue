<template>
  <div class="q-py-sm q-px-md bg-white q-my-sm">
    <div class="q-gutter-y-sm">
      <div class="row items-center">
        <q-avatar
          icon="style"
          class="q-mr-xs"
          color="blue-3"
          text-color="red-8"
          size="32px"
        />
        <div class="row">
          <div class="text-subtitle q-mr-sm text-grey-9 text-weight-medium">
            {{ props.comment.username }}
          </div>
          <div class="text-subtitle text-grey-7 q-mr-sm">•</div>
          <div class="text-subtitle text-grey-7">
            {{ props.comment.created }}h
          </div>
        </div>
      </div>
      <div class="text-subtitle">
        {{ props.comment.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QAvatar } from 'quasar';
import { PBCommentModel } from 'src/pages/creation-interface';
import { CommentModel } from './models';

const props = defineProps<{
  comment: PBCommentModel;
}>();
</script>

<style scoped></style>
