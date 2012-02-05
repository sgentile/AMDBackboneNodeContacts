define([
	'jquery',
  	'underscore',
  	'backbone',
  	'views/home/main',
  	'views/contacts/list'
], function($, _, Backbone, mainHomeView, contactsListView){
	var AppRouter = Backbone.Router.extend({
		routes: {			
			//'contacts' : 'showContacts',
			'*actions' : 'defaultAction'
		},
		
		defaultAction : function(actions){
			mainHomeView.render();
			
		},
		
		showContacts : function(){
			contactsListView.render();
		}
	});
	
	var initialize = function(){
		var app_router = new AppRouter;
		Backbone.history.start();
	};
	
	return {
		initialize : initialize
	};
});