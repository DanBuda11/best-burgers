import Backbone from 'backbone';
import $ from 'jquery';
import BurgerModel from '../models/BurgerModel';

const BurgerView = BackBone.View.extend({
	className: 'burgerBox',
	initialize: function(argument) {
		this. = argument;
		this.render();
	},
	render: function() {
		const template = `
			<div>potato</div>`;
			this.$el.html(template);
	}
});
export default BurgerView;