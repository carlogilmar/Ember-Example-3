import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  address: DS.attr('string'),
  zipCode: DS.attr('string'),
  cardNumber: DS.attr('string'),
  cardVerification: DS.attr('string'),
  cardExpiration: DS.attr('string')
});
