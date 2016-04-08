import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerCollection from './collections/burgerCollection';



let potato = new BurgerCollection();
var settings = {
	success: function() {
		potato.forEach((test) => {
			console.log(test.get('title'));

		})
	}
};
			
potato.fetch(settings);
