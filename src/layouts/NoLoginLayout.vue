<template>
  <q-layout>
    <q-header class="bg-white flex justify-end q-pa-md">
      <q-btn
        unelevated
        rounded
        class="text-weight-bold"
        text-color="black"
        :label="register ? 'Log in' : 'Sign up'"
        no-caps
        @click="goToSignUpAndLogin"
      />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const register = ref(false);

const goToSignUpAndLogin = () => {
  register.value = !register.value;
  if (register.value) router.push({ name: 'register' });
  else router.push({ name: 'login' });
};
</script>

<style scoped></style>
