define([
  'jquery',
  'underscore',
  'backbone',
  'models/contact'
], function($, _, Backbone, Store, contact){
	var contactsCollection = Backbone.Collection.extend({
		model : contact,		
	});
	return new contactsCollection;
});
