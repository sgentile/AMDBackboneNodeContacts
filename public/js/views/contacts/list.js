define([
  'jquery',
  'underscore',
  'backbone',
  'views/contacts/item',
  'collections/contacts'
], function($, _, Backbone, ContactView, contactsCollection){
	var ContactsListView = Backbone.View.extend({
		el: "#contactsRegion",
		
		initialize: function(){
      		this.collection = contactsCollection;
      		
      		this.collection.bind('reset', this.addAll, this);
			this.collection.bind('add', this.addOne, this);
			this.collection.bind('all', this.render, this);
			
			this.collection = contactsCollection.add({firstname: 'Steve', lastname: 'Gentile'}); //create one
			this.collection = contactsCollection.add({firstname: 'Jake', lastname: 'Gentile'}); //create one
		},
		
		addAll: function(){
			this.collection.each(this.addContact);
		},
		addOne: function(contact){
			var view = new ContactView({model:contact});
			$("#contacts-list").append(view.render().el);
		},
		
		render: function(){
			
		}
	});
	
	return new ContactsListView;
});