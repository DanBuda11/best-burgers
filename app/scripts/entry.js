import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerView from '../viewss/BurgerView';



$( ".addBurger" ).click(function () {
  if ( $( ".input-form" ).is( ":hidden" ) ) {
    $( ".input-form" ).slideDown( "slow" );
  } else {
    $( ".input-form" ).slideUp();
  }
});

$(".input-form").submit (e) => {
	e.preventDefault;
		let submitBurger = {
		title: $('.burgerTitle').val();
		location: $('.burgerLoc').val();
		description: $('.burgerDesc').val();
		pic: $('.burgerPic').val();
	};
	post.create(newBurger);
	let newBurger = new BurgerView(
		newBurger.location;
		newBurger.description;
		newBurger.pic;
	);
	$('body').append(newTBurger.$el);
});















// let potato = new BurgerCollection();
// var settings = {
// 	success: function() {
// 		potato.forEach((test) => {
// 			console.log(test.get('title'));

// 		})
// 	}
// };
			
// potato.fetch(settings);

// let newBurger = new BurgerView();
// newBurger.render();
// $('body').append(newBurger.$el);

