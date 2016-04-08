import Backbone from 'backbone';
import $ from 'jquery';
// import BurgerModel from '../models/BurgerModel';

export default Backbone.View.extend({
	className: 'burgerBox',
	initialize: function(newBurger) {
		this.item = newBurger;
		this.render();
	},
	render: function() {
		const template = `
				<div class="burgerPicBox">
					<img src="http://5napkinburger.com/wp-content/themes/blankslate/media/burgers/burger-5napkin.jpg" class="burgerPic">
				</div>
				<div class="burgerInfo">
					<h4 class="burgerPlace">Mostly Meat</h4>
					<h3 class="burgerName">The Crippler</h3>
				</div>
				<div class="likesDiv">
					<img src="https://thevoiceofonedotorg.files.wordpress.com/2015/02/lck75xpca.jpeg" class="thumbPic">
				</div>
			




			`;
			this.$el.html(template);
	}
});