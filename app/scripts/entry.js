import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerView from '../viewss/BurgerView';



let potato = new BurgerCollection();
var settings = {
	success: function() {
		potato.forEach((test) => {
			console.log(test.get('title'));

		})
	}
};
			
potato.fetch(settings);

let newBurger = new BurgerView();
newBurger.render();
$('body').append(newBurger.$el);

