define([
  'jquery',
  'underscore',
  'backbone',
  'views/contacts/add',
  'views/contacts/list',
  'text!templates/home/main.html'
], function($, _, Backbone, ContactView, contactsListView, mainHomeTemplate){
	  var mainHomeView = Backbone.View.extend({
	    el: $("#mainRegion"),
	    render: function(){
	      this.el.html(mainHomeTemplate);
	      var contactView = new ContactView();
	      contactView.render(); 
	      contactsListView.render();
	    }
	  });
	  return new mainHomeView;
});
