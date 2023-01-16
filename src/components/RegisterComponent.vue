<template>
  <div class="column fit window-height q-pa-md">
    <div
      class="flex justify-center items-center text-center text-h5 col text-weight-medium"
    >
      Hello new resident, welcome to Complaiddit
    </div>
    <q-form class="col-6">
      <q-input
        square
        filled
        clearable
        v-model="username"
        placeholder="Username"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        square
        filled
        clearable
        v-model="email"
        placeholder="Email"
        type="email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        square
        filled
        clearable
        v-model="password"
        placeholder="Password"
        :type="isPwd ? 'password' : 'text'"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </q-form>
    <div class="text-center">
      By continuing, you agree to our
      <span class="text-orange-10" style="text-decoration: underline"
        >User Agreement
      </span>
      and
      <span class="text-orange-10" style="text-decoration: underline">
        Privacy Policy
      </span>
    </div>
    <div class="col q-pt-lg">
      <q-btn
        unelevated
        rounded
        color="orange-10"
        size="lg"
        class="full-width"
        label="Continue"
        no-caps
        type="submit"
        @click="createUser"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import { useUserStore } from 'src/stores/user';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const isPwd = ref(true);

const $q = useQuasar();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Reactive variables
const email = ref('');
const username = ref('');
const password = ref('');

// Function to create a new user
const createUser = async () => {
  try {
    // Create new user
    const user = await pb.collection('users').create({
      username: username.value,
      email: email.value,
      password: password.value,
      passwordConfirm: password.value,
    });
    if (user) {
      // Authenticate the user in order to set the username
      await authUser();
      $q.notify('Logged in');
      // After succesfull user registration, redirect to dashboard
      router.push({ path: '/' });
    } else {
      console.log('Error');
      $q.notify('Error');
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
    const userData = await pb
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
