import $ from 'jquery';
import Backbone from 'backbone';
import BurgerModel from '../models/BurgerModel';
import BurgerView from '../views/BurgerView';
import BurgersView from '../views/BurgersView';

export default Backbone.Collection.extend({
  model: BurgerModel,
  url: 'https://bba-app.herokuapp.com/api/posts'
});