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



//import BurgerView from './views/BurgerView.js';
// import RecentlySubmittedView from './../views/RSView.js';
// import BurgerCollection from "./collections/burgerCollection.js"
console.log('start');


$( ".addBurger" ).click(function () {
  if ( $( ".input-form" ).is( ":hidden" ) ) {
    $( ".input-form" ).slideDown( "slow" );
  } else {
    $( ".input-form" ).slideUp();
  }
});

// let burgerList = new BurgerCollection();
// var settings = {
// 	success: function() {
// 		burgerList.forEach((item) => {
// 			let newHamburgerView = new RecentlySubmittedView(
// 				item.get('title'),
// 				item.get('location'),
// 				item.get('description'),
// 				item.get('pic')
// 			);
// 			$('body').append(newHambergerView.el);
// 		});
// 	}
// };
// burgerList.fetch(settings);

// $(".input-form").on('submit', (e) => {
// 	e.preventDefault;
// 	console.log('submit')
// 		let submitBurger = {
// 		title: $('.burgerTitle').val(),
// 		location: $('.burgerLoc').val(),
// 		description: $('.burgerDesc').val(),
// 		pic: $('.burgerPic').val()
// 	};
// 	burgerList.create(submitBurger);
// 	let newBurger = new BurgerView(
// 		newBurger.location,
// 		newBurger.description,
// 		newBurger.pic
// 	);
// 	console.log($('.burgerPic').val());
// 	$('body').append(newBurger.el);

// });















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


