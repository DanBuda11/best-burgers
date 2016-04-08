import Backbone from 'backbone';
import $ from 'jquery';
// import BurgerModel from '../models/BurgerModel';

export default BackBone.View.extend({
	tagName: '',
	className: '',
	initialize: function(argument) {
		this. = argument;
		this.render();
	},
	render: function() {
		const template = `
			<div></div>`;
			this.$el.html(template);
	}
});