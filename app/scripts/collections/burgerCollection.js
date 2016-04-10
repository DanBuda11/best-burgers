import $ from 'jquery';
import Backbone from 'backbone';
import BurgerModel from '../models/burgerModel';

export default Backbone.Collection.extend({
  model: BurgerModel,
  url: `https://bba-app.herokuapp.com/api/posts`
});