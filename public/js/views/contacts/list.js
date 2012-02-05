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
			
			//get from server:
			this.collection.fetch();
			//this.collection = contactsCollection.add({firstname: 'Steve', lastname: 'Gentile'}); //create one			
		},
		
		addAll: function(){
			this.collection.each(this.addOne);
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