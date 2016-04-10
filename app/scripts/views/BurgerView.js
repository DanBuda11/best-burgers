import $ from 'jquery';
import Backbone from 'backbone';
import BurgerCollection from '../collections/burgerCollection';
import BurgerModel from '../models/burgerModel';

export default Backbone.View.extend({
	initialize: function(title, desc, pic, loc, votes) {
		this.title = title;
		this.desc = desc;
		this.pic = pic;
		this.loc = loc;
		this.votes = votes;
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
  }
});