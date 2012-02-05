define([
  'jquery',
  'underscore',
  'backbone',
  'models/contact'
], function($, _, Backbone, Store, contact){
	var contactsCollection = Backbone.Collection.extend({
		url 	: 'Contact',
		model 	: contact,		
	});
	return new contactsCollection;
});
