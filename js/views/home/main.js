define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/main.html'
], function($, _, Backbone, mainHomeTemplate){
	  var mainHomeView = Backbone.View.extend({
	    el: $("#mainRegion"),
	    render: function(){
	      this.el.html(mainHomeTemplate);
	    }
	  });
	  return new mainHomeView;
});
