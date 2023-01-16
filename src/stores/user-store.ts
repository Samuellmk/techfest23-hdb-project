import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: 'James',
    gender: 'male',
    email: 'James111@gmail.com',
    points: 1234,
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
  },
});
