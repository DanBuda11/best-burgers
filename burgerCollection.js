import Backbone from 'backbone';
import BurgerModel from '../models/BurgerModel';

const BurgerCollection = Backbone.Collection.extend({
	model: BurgerModel,
	url: 'https://bba-app.herokuapp.com/api/posts'
});

export default BurgerCollection;
