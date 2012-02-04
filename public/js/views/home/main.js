define([
  'jquery',
  'underscore',
  'backbone',
  'views/contacts/add',
  'text!templates/home/main.html'
], function($, _, Backbone, ContactView, mainHomeTemplate){
	  var mainHomeView = Backbone.View.extend({
	    el: $("#mainRegion"),
	    render: function(){
	      this.el.html(mainHomeTemplate);
	      var contactView = new ContactView();
	      contactView.render(); 
	    }
	  });
	  return new mainHomeView;
});
