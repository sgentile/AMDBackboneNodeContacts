define([
	'jquery', 
  	'underscore', 
  	'backbone',
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
			contactCollection.create(contact, {
					success: function(model, response){
						alert('added');
					},
					error : function(){
						alert('error adding');
					}
				});
			//contactCollection.create(contact);
			return false;
		}
	});
	
	return addContactsView;
});
