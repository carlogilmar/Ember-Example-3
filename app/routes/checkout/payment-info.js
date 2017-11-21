import Ember from 'ember';

export default Ember.Route.extend({

  //controllerName: 'checkout',
  model() {
    return this.modelFor('checkout');
  },

  actions: {
    submitForm() {
			alert("okas");
      //this.transitionToRoute('checkout.confirmation');
    }
  }

});
