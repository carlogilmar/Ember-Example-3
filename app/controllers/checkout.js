import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitForm() {
      // persist data to back-end here
      console.log('Order placed!');
      this.transitionToRoute('checkout.confirmation');
    }
  }
});
