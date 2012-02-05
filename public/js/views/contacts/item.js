define([
	"jquery",
	"underscore",
	"backbone",
	"text!templates/contacts/item.html"
], function($, _, Backbone, contactItemTemplate){
	var ContactItemView = Backbone.View.extend({
		tagName : "li",
		//cache the template:
		template : _.template(contactItemTemplate),
		
		initialize : function(){
			
		},
		
		render : function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return ContactItemView;
});
