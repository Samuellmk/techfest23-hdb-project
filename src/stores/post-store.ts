import { defineStore } from 'pinia';

export const usePostStore = defineStore('Post', {
  state: () => ({
    title: '',
    description: '',
  }),
  getters: {},
  actions: {
    setTitleAndDescription(title: string, description: string) {
      this.title = title;
      this.description = description;
    },
  },
});
