import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import BurgerView from './views/BurgerView';
import BurgerCollection from './collections/BurgerCollection';

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






$( ".burgersubmit" ).click(function () {
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









