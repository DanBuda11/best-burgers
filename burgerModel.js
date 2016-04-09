import Backbone from 'backbone';

const BurgerModel = Backbone.Model.extend({
	defaults: {
		id: 2,
		title: "Chambray.",
		description: "Organic try-hard seitan occupy post-ironic humblebrag kombucha.",
		pic: "https://pigment.github.io/fake-logos/logos/medium/color/4.png",
		votes_count: 15,
		created_at: "2016-04-08T16:08:38.065Z",
		updated_at: "2016-04-08T16:08:38.065Z",
		location: "Luettgen, Raynor and Hayes",
		user_id: null
	},
	urlRoot: 'https://bba-app.herokuapp.com/api/posts',
	idAttribute: '_id'
});

export default BurgerModel;