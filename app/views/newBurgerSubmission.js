import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerCollection from './collections/burgerCollection';


$( ".addBurger" ).click(function () {
  if ( $( ".input" ).is( ":hidden" ) ) {
    $( ".input" ).slideDown( "slow" );
  } else {
    $( ".input" ).slideUp();
  }
});

let input = New NewBurgerView();

const NewBurgerView = Backbone.View.extend({
	tagName: 
	className: 
	events: {
		'submit form': 'addToCollection'
	},
	initialize: function() {
		this.burger = burger;
		this.location = location;
		this.desc = description
		this.render();
	},
	render: function() {
		const template = 
			`<span class = "inputPrompt">Burger Joint</span>
			<input type = "text" placeholder = "Burger Joint"></input>
			<span class = "inputPrompt">Burger Joint</span>
			<input type = "url" placeholder = "Got a pic"></input>
			<span class = "inputPrompt">Burger Joint</span>
			<input type = "text" placeholder = "Burger Joint"></input>
		this.$el.html(template);
	},
	addToCollection: function() {
		
		this.$el.remove();
	}
});