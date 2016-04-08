import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerView from './views/BurgerView.js';

let newBurger = new BurgerView();
newBurger.render();
$('body').append(newBurger.$el);





// change all the below to match burgers not polarBears

var settings = {
	success: function() {
		polarBears.forEach((image) => {
			console.log(image.get('caption'));
			let newPolarBear = new ImageView(image.get('caption'), image.get('src'));
			$('.image-list').append(newPolarBearView.$el);
		});
	}
};

polarBears.fetch(settings);

$('.image-form').on('submit', (e) => {
	e.preventDefault();
	let new PolarBear = {
		src: $('.src').val(),
		caption: $('.caption').val()
	};
	polarBears.create(newPolarBear);
});


let polarBears = new ImageCollection();