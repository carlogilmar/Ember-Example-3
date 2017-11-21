import Ember from 'ember';

export default Ember.Route.extend({

  //controllerName: 'checkout',
  model() {
    return this.modelFor('checkout');
  },

  actions: {
    submitForm() {
      //let newBoardGame = this.get('newBoardGame');
      console.log(this.modelFor('checkout'));
      console.log("agarrando el campo");

      return this.modelFor('checkout').save().then(function(){
        console.log("Si se pudo!!!");
      });


			//alert("okas");
      //this.transitionToRoute('checkout.confirmation');
    }
  }

});
