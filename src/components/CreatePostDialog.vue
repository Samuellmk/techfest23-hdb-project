<template>
  <div>
    <q-dialog
      v-model="dialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black">
        <q-btn dense flat icon="close" v-close-popup size="lg">
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>

        <q-card-section class="q-pt-none">
          <q-form @submit="onSubmit">
            <q-input
              borderless
              v-model="title"
              placeholder="Add a title"
              :input-style="{ fontSize: 'large', fontWeight: 'bold' }"
              autogrow
            />
            <br />
            <q-input
              borderless
              v-model="description"
              placeholder="Add body text"
              :input-style="{ fontSize: 'medium' }"
              autogrow
            />
            <br />
            <q-uploader
              class="full-width"
              url="http://localhost:4444/upload"
              label="Images Of Fault"
              multiple
              max-files="3"
              batch
              auto-upload
              accept=".jpg, image/*"
              @rejected="onRejected"
            />
            <br />
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="POST!"
              type="submit"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { usePostStore } from 'src/stores/post-store';

const $q = useQuasar();
const store = usePostStore();
const props = defineProps(['dialog']);
const emits = defineEmits(['update:dialog']);

const title = ref('');
const description = ref('');

const dialog = computed({
  get() {
    return props.dialog;
  },
  set(value: boolean) {
    emits('update:dialog', value);
  },
});

const onRejected = () => {
  $q.notify('Image is too large or the format is wrong!');
  return true;
};

const reset = () => {
  title.value = '';
  description.value = '';
};

const onSubmit = () => {
  store.setTitleAndDescription(title.value, description.value);
  dialog.value = false;
  reset();
  $q.notify('Posting!');
};
</script>
