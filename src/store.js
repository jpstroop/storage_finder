// Simple state management. See: https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87
export const store = {
  state: {
    requiredFeatures: [ ]
  },
  addFeature(id) {
    this.state.requiredFeatures.push(id);
  },
  removeFeature(id) {
    this.state.requiredFeatures = this.state.requiredFeatures.filter(e => e !== id);
  },
  hasFeature(id) {
    return this.state.requiredFeatures.includes(id);
  }
};
