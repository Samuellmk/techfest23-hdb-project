<template>
  <h2 class="text-2xl font-bold">Register</h2>
  <q-form class="q-gutter-md" @submit.prevent="createUser">
    <q-input
      square
      filled
      clearable
      v-model="username"
      label="Username"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />
    <q-input
      square
      filled
      clearable
      v-model="email"
      label="Email"
      type="email"
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
    <q-input
      square
      filled
      clearable
      v-model="passwordConfirm"
      type="password"
      label="Repeat Password"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-card-actions class="q-px-md">
      <q-btn
        unelevated
        color="primary"
        size="lg"
        class="full-width"
        label="Register"
        type="submit"
      />
    </q-card-actions>
  </q-form>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { pocketBaseSymbol } from 'src/symbols/injectionSymbols';
import { useUserStore } from 'src/stores/user';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
// Inject the PocketBase client
const $pb = inject(pocketBaseSymbol);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Reactive variables
const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

// Function to create a new user
const createUser = async () => {
  try {
    if (validateInput()) {
      // Create new user
      const user = await $pb?.collection('users').create({
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      });
      if (user) {
        // Authenticate the user in order to set the username
        await authUser();

        // After succesfull user registration, redirect to dashboard
        router.push({ path: '/' });
      } else {
        console.log('Error');
        $q.notify('Error');
      }
    } else {
      alert("Password doesn't match");
    }
  } catch (error) {
    console.log(error);
    $q.notify('Error Registering Please Try Again');
  }
};

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

// Simple utility function to validate input. Easiliy extendable with additional checks if needed
const validateInput = () => {
  if (password.value !== passwordConfirm.value) {
    return false;
  } else {
    return true;
  }
};
</script>
