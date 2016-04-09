import $ from 'jquery';
import Backbone from 'backbone';
import BurgerView from './BurgerView';
import BurgerCollection from '../collections/BurgerCollection';
import BurgerModel from '../models/BurgerModel';

export default Backbone.View.extend({
	el: 'body',
	initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('');
    BurgerCollection.each(function() {
      var burger = new BurgerView({
    	
      });

      this.$el.append(burger.render().el);
    }.bind(this));

    return this;
  }

});