import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userID: useLocalStorage('userID', ''),
    username: useLocalStorage('username', ''),
    userProfileID: useLocalStorage('userProfileID', ''),
    points: 124,
    reported: 0,
    visited: 5,
  }),
  getters: {},
  actions: {
    incrementPoints(point: number) {
      this.points += point;
    },
    decrementPoints(point: number) {
      this.points -= point;
    },
    incrementReport(report: number) {
      this.reported += report;
    },
    incrementVisited(visit: number) {
      this.visited += visit;
    },
    clear() {
      this.userID = '';
      this.username = '';
      this.userProfileID = '';
    },
  },
});
