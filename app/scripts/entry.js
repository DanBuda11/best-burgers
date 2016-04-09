import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import BurgerView from './views/BurgerView';
import BurgerCollection from './collections/BurgerCollection';
import BurgersView from './views/BurgersView';

let burgers = new BurgerCollection;

var settings = {
	success: function() {
		burgers.forEach((arg) => {
			console.log(arg.get('title'));
			let newBurger = new BurgerView(arg.get('title'), arg.get('description'), arg.get('pic'), arg.get('location'), arg.get('votes_count'));
			$('.burgerBox').append(newBurger.$el);
		});
	}
};

burgers.fetch(settings);