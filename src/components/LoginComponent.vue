<template>
  <h2 class="text-2xl font-bold">Login</h2>
  <q-form class="q-gutter-md" @submit.prevent="authUser">
    <q-input
      square
      filled
      clearable
      v-model="email"
      label="Email"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />
    <q-input
      square
      filled
      clearable
      v-model="password"
      type="password"
      label="Password"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user';
import { pocketBaseSymbol } from 'src/symbols/injectionSymbols';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Inject the PocketBase client
const $pb = inject(pocketBaseSymbol);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Local reactive variables
const email = ref('');
const password = ref('');

// Function to authenticate the user based on email and password
const authUser = async () => {
  try {
    // Authenticate the user via email and password
    const userData = await $pb
      ?.collection('users')
      .authWithPassword(email.value, password.value);

    if (userData) {
      userStore.userID = userData.record.id;
      userStore.username = userData.record.profile?.username;
      userStore.userProfileID = userData.record.profile?.id;
      router.push({ path: '/' });
    }
  } catch (error) {
    console.log(error);
    $q.notify('Error authenticating Please Try Again');
  }
};
</script>
