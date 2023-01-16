<template>
  <q-page
    class="bg-grey max-height window-width row justify-center items-center"
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <LoginComponent />
              </div>
              <div>
                <RegisterComponent />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
</script>
