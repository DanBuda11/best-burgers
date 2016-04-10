import $ from 'jquery';
import Backbone from 'backbone';
import BurgersView from './BurgersView';
import BurgerCollection from '../collections/BurgerCollection';
import BurgerModel from '../models/BurgerModel';

export default Backbone.View.extend({
	events: {
    "click .voting-and-likes": "countVotes"
  },
  initialize: function(title, desc, pic, loc, votes, id) {
		this.title = title;
		this.desc = desc;
		this.pic = pic;
		this.loc = loc;
		this.votes = votes;
    this.id = id;
		this.render();
	},
    render: function() {
  	const template = `
  		<div class="col col-8 burger-container">
  			<div class="burger-picture">
  				<img src="${this.pic}">
  			</div>
  			<div class="burger-info">
  				<div class="burger-name">
  					<div class= "the-burger-name">${this.title}</div>
  					<div class= "the-place-name">${this.loc}</div>
  				</div>
  				<div class="voting-and-likes">
  					<i class="fa fa-thumbs-up"></i>
  					(${this.votes} likes)
  				</div>
  			</div>
  		</div>`;
    this.$el.html(template);
    return this;
  },
  countVotes: function() {
     let votes = this.votes++;
     $.post(`https://bba-app.herokuapp.com/api/posts/${this.id}/vote`);
      this.render(votes);
      return this;
   }
});
  
  