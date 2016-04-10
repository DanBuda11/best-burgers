import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import BurgerView from './views/BurgerView';
import BurgerCollection from './collections/burgerCollection';

let burgers = new BurgerCollection;

var settings = {
	success: function() {
		burgers.forEach((arg) => {
			//console.log(arg.get('title'));
			let newBurger = new BurgerView(arg.get('title'), arg.get('description'), arg.get('pic'), arg.get('location'), arg.get('votes_count'), arg.get('id'));
			$('.burgerBox').append(newBurger.$el);
		});
	}
};

burgers.fetch(settings);



$( ".suggestion-button" ).click(function () {
  if ( $( ".input-form" ).is( ":hidden" ) ) {
    $( ".input-form" ).slideDown( "slow" );
  } else {
    $( ".input-form" ).slideUp();
  }
});

const RecentlySubmittedView = Backbone.View.extend({
	tagName: 'section',
	//className: submitted_burger,
	initialize: function(title, location, description) {
		this.title = title;
		this.location = location;
		this.desc = description;
		this.render();
	},
	render: function() {
		const template = 
			`<p>Thank for adding the ${this.title} from ${this.location}. 
			You can now find your entry on the list and vote for it!  Happy eating!</p>`
		$('.display-container').append(template);
		return this;
	}
});

let burgerList = new BurgerCollection();

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

$(".search-form").submit( (e) => {
	e.preventDefault;
	let item = $(".search-input").val();
	console.log($(".search-input").val());
// 	let found = burgerList.find(function(item) {
// 		 let foundBurgerView = new searchView(title, desc, pic, loc);
		
// 			$(".error-container").html("Sorry, we don't have your burger")
// 		}
// 	})
	

// })

// var found = myCollection.find(function(item){
//         return Number(item.get('tranId')) === tranId;
 });







