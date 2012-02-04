define([
	'jquery', 
  	'underscore', 
  	'backbone',
  	//'models/contact',
  	'collections/contacts',
  	'text!templates/contacts/add.html'
	], function($, _, Backbone, contactCollection, addContactTemplate){
	
	var addContactsView = Backbone.View.extend({
		el: "#addContactRegion",
		//cache the template:
		template: _.template(addContactTemplate),

		events:{
			'submit #addContactForm' : 'addContact'
		},
		
		render: function(){
			$(this.el).html(this.template());
			return this;	
		},
		
		addContact: function(model){
			var contact = {
				firstname: 	$("#firstname").val(),
				lastname: 	$("#lastname").val()
			}
			contactCollection.add(contact);
			return false;
		}
	});
	
	return addContactsView;
});
