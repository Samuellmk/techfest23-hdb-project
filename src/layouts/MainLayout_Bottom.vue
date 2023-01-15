<template>
  <div class="">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar elevated>
          <q-btn flat icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
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
            v-for="link in essentialLinks"
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
          <q-tab :ripple="false" name="home" icon="home" label="Home" />
          <q-tab
            :ripple="false"
            name="videos"
            icon="add"
            label="Create"
            @click="
              () => {
                dialogForPostCreation = true;
              }
            "
          />
          <q-tab
            :ripple="false"
            name="inbox"
            icon="notifications"
            label="Inbox"
          />
        </q-tabs>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { communities } from './communities';
import CreatePostDialog from 'src/components/CreatePostDialog.vue';

const tab = ref('images');

const dialogForPostCreation = ref(false);

const essentialLinks: EssentialLinkProps[] = communities;

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style scoped>
:deep(.q-tab__icon) {
  font-size: 2.3em;
}

:deep(.q-tab__label) {
  font-size: 0.8em;
}
</style>
