import './../styles/main.scss';
import $ from 'jquery';
//import BurgerView from './views/burgerview.js';
//import RecentlySubmittedView from './views/rsview.js';
import BurgerCollection from "./collections/burgerCollection.js";
import Backbone from 'backbone';

console.log('start');


$( ".addBurger" ).click(function () {
  if ( $( ".input-form" ).is( ":hidden" ) ) {
    $( ".input-form" ).slideDown( "slow" );
  } else {
    $( ".input-form" ).slideUp();
  }
});

const RecentlySubmittedView = Backbone.View.extend({
	//tagName: 
	//className: submitted_burger,
	initialize: function(title, location, description) {
		this.title = title;
		this.location = location;
		this.desc = description;
		this.render();
	},
	render: function() {
		const template = 
		this.$el.html(this.item);
		$('body').append(this.$el);
	}
	
});

let burgerList = new BurgerCollection();
// var settings = {
// 	success: function() {
// 		burgerList.forEach((posts) => {
// 			let newHamburgerView = new RecentlySubmittedView(
// 				posts.get('title')
// 				// burgerList.get('location'),
// 				// burgerList.get('description'),
// 				// burgerList.get('pic')
// 			);
// 			$('body').append(newHamburgerView.el);
// 		});
// 	}
// };
//burgerList.create(settings);

// $(".input-form").on('submit', (e) => {
// 	e.preventDefault();
// 	console.log('submit');
// 		let submitBurger = {
// 		title: $('.burgerTitle').val(),
// 		// location: $('.burgerLoc').val(),
// 		// description: $('.burgerDesc').val(),
// 		// pic: $('.burgerPic').val()
// 	};
// 	console.log(submitBurger);
// 	console.log(burgerList.title);

// 	burgerList.create(submitBurger);

// 	let newBurger = new RecentlySubmittedView(
// 		burgerList.title
// 		// burgerList.location,
// 		// newBurger.description,
// 		// newBurger.pic
// 	);
// 	console.log(burgerList);
// 	$('.input-form').append(newBurger.$el);

// });

$(".input-form" ).submit( (e) => {
		e.preventDefault();
		let title = $(".burgerTitle").val();
		let location = $('.burgerLoc').val();
		let desc = $('.burgerDesc').val();
		let pic = $('.burgerPic').val();
        $.post( "https://bba-app.herokuapp.com/api/posts", 
        	{post: {title: title , description: desc, location: location, pic: pic} });
        let newBurger = new RecentlySubmittedView(title, location, desc);
        $('.input-form').append(newBurger.$el);
        clear();

});


function clear() {
	$(".burgerTitle").val("");
	$('.burgerLoc').val("");
	$('.burgerDesc').val("");
	$('.burgerPic').val("");
};








