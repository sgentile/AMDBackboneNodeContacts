define([
  'underscore',
  'backbone'
], function(_, Backbone){
	var ContactModel = new Backbone.Model.extend({
		defaults:{
			id			: null,
			firstname	: "",
			lastname	: ""
		},
		
		initialize: function() {
			alert('initialized');
		}
	});
	
	
  	
  	return ContactModel;
});
