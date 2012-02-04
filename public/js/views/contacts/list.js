define([
  'jquery',
  'underscore',
  'backbone',
  'collections/contacts',
  'text!templates/contacts/list.html'
], function($, _, Backbone, contactsCollection, contactsListTemplate){
	var ContactsListView = Backbone.View.extend({
		el: "#contactsRegion",
		
		initialize: function(){
			this.collection = contactsCollection;
			this.collection = contactsCollection.add({firstname: 'Steve', lastname: 'Gentile'}); //create one
			this.collection.bind('add', this.addContact);
			//this.collection = contactsCollection.add({firstname: 'Steve', lastname: 'Gentile'}); //create one
		},
		
		addContact: function(model){
			
			//todo: fix this!
			
			var data = {
				contacts : this.models,
				_: _ 
			};
			
			var compiledTemplate = _.template(contactsListTemplate, data);
			$("#contactsRegion").html( compiledTemplate );
		},
		
		render: function(){
			var data = {
				contacts : this.collection.models,
				_: _ 
			};
			
			var compiledTemplate = _.template(contactsListTemplate, data);
			$("#contactsRegion").html( compiledTemplate );
		}
	});
	
	return new ContactsListView;
});