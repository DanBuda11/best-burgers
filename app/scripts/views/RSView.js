import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerCollection from './collections/burgerCollection';



//let input = New NewBurgerView();

const RecentlySubmittedView = Backbone.View.extend({
	//tagName: 
	className: submitted_burger
	initialize: function() {
		this.title = ;
		this.location = location;
		this.desc = description
		this.render();
	},
	render: function() {
		const template = 
			`<span>${this.title}</span>
			<span>${this.location}</span>
			<span>${this.description}<span>
			`
		this.$el.html(this.item);
		$('.list').append(this.$el);
	},
	
		export default RecentlySubmittedView;
		
	}
});