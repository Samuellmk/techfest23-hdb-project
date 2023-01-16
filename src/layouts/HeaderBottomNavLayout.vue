<template>
  <q-layout view="lHh lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar elevated class="row justify-between no-padding">
        <q-btn
          v-if="tab === 'home'"
          flat
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn
          v-if="tab === 'home'"
          unelevated
          rounded
          class="q-mx-md"
          size="sm"
          color="red-8"
          label="Log out"
          text-color="white"
          aira-label="Logout"
          @click="onLogoutClick"
        />
        <q-btn
          v-if="
            (route.name === 'redemption' || route.name === 'redeem') &&
            tab !== 'home'
          "
          flat
          icon="arrow_back"
          aria-label="back"
          color="black"
          @click="() => router.back()"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-grey-2">
        <router-view />
        <CreatePostDialog v-model:dialog="dialogForPostCreation" />
      </q-page>
    </q-page-container>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header style="color: black">
          <b>Your Communities</b>
        </q-item-label>

        <EssentialLink
          v-for="link in communities"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer class="bg-white">
      <q-tabs
        no-caps
        active-color="black"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab
          :ripple="false"
          name="home"
          icon="home"
          label="Home"
          @click="onHomeClick"
        />
        <q-btn no-caps flat :ripple="false" @click="onCreateClick">
          <div class="column items-center no-wrap">
            <q-icon name="add" style="font-size: 2.3em; margin: -5px" />
            <div class="text-center" style="font-size: 0.8em">Create</div>
          </div>
        </q-btn>
        <q-tab
          :ripple="false"
          name="achievement"
          icon="stars"
          label="Achievement"
          @click="onAchievementClick"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { communities } from './communities';
import CreatePostDialog from 'src/components/CreatePostDialog.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import PocketBase from 'pocketbase';
import { useQuasar } from 'quasar';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);
const $q = useQuasar();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const tab = ref('home');

const dialogForPostCreation = ref(false);

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const onHomeClick = () => {
  router.push('/');
};

const onCreateClick = () => {
  dialogForPostCreation.value = true;
};

const onAchievementClick = () => {
  router.push('/achievement');
};

const onLogoutClick = async () => {
  await userStore.clear();
  await pb.authStore.clear();
  $q.notify('Logged out');
  router.push('/login');
};
</script>

<style scoped>
.create-btn {
  font-size: 2.3em !important;
}

:deep(.q-tab__icon) {
  font-size: 2.3em;
}

:deep(.q-tab__label) {
  font-size: 0.8em;
}
</style>
