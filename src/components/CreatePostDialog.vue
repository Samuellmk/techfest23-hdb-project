<template>
  <div>
    <q-dialog
      v-model="dialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black q-py-sm">
        <div class="row justify-between items-center q-pr-md">
          <q-btn
            dense
            flat
            icon="close"
            v-close-popup
            size="lg"
            class="q-pl-xs q-py-none"
          />

          <q-btn
            unelevated
            rounded
            :color="disable() ? 'grey-3' : 'blue-8'"
            :text-color="disable() ? 'grey-7' : 'white'"
            label="POST"
            type="submit"
            @click="onSubmit"
            :disable="disable()"
          />
        </div>

        <q-card-section class="q-pa-md">
          <q-form class="q-pa-none q-gutter-y-lg">
            <q-input
              dense
              borderless
              v-model="title"
              placeholder="Add a title"
              :input-style="{ fontSize: 'large', fontWeight: 'bold' }"
              autogrow
            />
            <q-input
              dense
              borderless
              v-model="description"
              placeholder="Add body text"
              :input-style="{ fontSize: 'medium' }"
              autogrow
            />
            <div v-show="!image">
              <q-file
                style="display: none"
                v-model="image"
                @update:model-value="handleUpload"
                ref="file"
              ></q-file>
              <q-btn
                round
                unelevated
                color="grey-3"
                text-color="grey-10"
                icon="image"
                @click="onImageClick"
              />
            </div>
            <q-img
              v-show="image"
              :src="imageUrl"
              spinner-color="white"
              style="height: 140px; max-width: 150px"
            >
              <q-btn
                round
                unelevated
                class="absolute all-pointer-events"
                size="8px"
                style="
                  top: 8px;
                  right: 8px;
                  background-color: rgba(0, 0, 0, 0.5);
                "
                @click="removeImage"
              >
                <q-icon name="close" color="white" />
              </q-btn>
            </q-img>
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
import { useUserStore } from 'src/stores/user-store';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const $q = useQuasar();
const store = usePostStore();
const user = useUserStore();
const props = defineProps(['dialog']);
const emits = defineEmits(['update:dialog']);
const fileReader = new FileReader();

const title = ref('');
const description = ref('');

const image = ref();
const imageUrl = ref('');
const file = ref();

const dialog = computed({
  get() {
    return props.dialog;
  },
  set(value: boolean) {
    emits('update:dialog', value);
  },
});

const disable = () => !(title.value && description.value && imageUrl.value);

const onImageClick = () => {
  file.value.pickFiles();
};

const handleUpload = () => {
  if (image.value) {
    imageUrl.value = URL.createObjectURL(image.value);
  }
};

const removeImage = () => {
  image.value = null;
  imageUrl.value = '';
};

const reset = () => {
  title.value = '';
  description.value = '';
  image.value = null;
};

const onSubmit = async () => {
  store.setTitleAndDescription(title.value, description.value);
  dialog.value = false;
  console.log(typeof imageUrl.value);
  const data = {
    username: user.username,
    community: 'test',
    description: description.value,
    title: title.value,
    votes: 0,
    imagestring: imageUrl.value,
  };

  const record = await pb.collection('posts').create(data);

  reset();
  $q.notify('Posting!');
};
</script>
