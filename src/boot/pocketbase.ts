import { boot } from 'quasar/wrappers';
// Import the PocketBase JS library
import client from '../pocketbase';
// Import custom pocketBase type
import { pocketBaseSymbol } from '../symbols/injectionSymbols';
import { useRoute } from 'vue-router';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, redirect }) => {
  // something to do
  app.provide(pocketBaseSymbol, client);
  //router.push({ path: '/login' });
  //redirect({ path: '/login' });
});
