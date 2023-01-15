<template>
  <q-page
    class="bg-grey window-height window-width row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <q-icon
          name="img:https://upload.wikimedia.org/wikipedia/en/7/72/Housing_and_Development_Board_%28logo%29.png"
          size="64px"
        />
        <h5 class="text-h5 text-white q-my-md">HDB Project</h5>
      </div>

      <br />

      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md" @submit="onSubmit">
              <q-input
                square
                filled
                clearable
                v-model="singpassId"
                label="Singpass ID"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Password"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="primary"
                  size="lg"
                  class="full-width"
                  label="Log in"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const singpassId = ref('');
const password = ref('');

const $router = useRouter();

const onSubmit = () => {
  if (singpassId.value !== '' && password.value !== '') {
    $router.push({ path: '/test' });
  }
};
</script>
