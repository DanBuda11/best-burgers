import Backbone from 'backbone';
import $ from 'jquery';
import BurgerModel from '../models/burgerModel';
import BurgerCollection from '../collections/burgerCollection';

export default Backbone.View.extend({
	className: 'burgerBox',
	initialize: function(newBurger) {
		this.item = newBurger;
		this.render();
	},
	render: function() {
		const template = `
			<div class="col col-8 burger-container">
				<div class="burger-picture">
				</div>
				<div class="burger-info">
					<div class="burger-name">
						<h2>The American Burger</h2>
						<h3>Uncle Willy's Tavern</h3>
					</div>	
					<div class="voting-and-likes">
						<i class="fa fa-thumbs-up"></i>(# of likes)
					</div>
				</div>
			</div>`;
		this.$el.html(template);
	}
});