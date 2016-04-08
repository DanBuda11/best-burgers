// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import BurgerView from './views/BurgerView';
import BurgerCollection from '../collections/BurgerCollection'


let burgerColl = new BurgerCollection();


var settings = {
	success: function() {
		burgerColl.forEach(item) => {
			let newPolarBear = new ImageView(image.get('caption'), image.get('src'));
			$('.image-list').append(newPolarBearView.$el);
		});
	}
};

burgerColl.fetch(settings);



let newBurger = new BurgerView();
newBurger.render();
$('body').append(newBurger.$el);