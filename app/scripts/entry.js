import Backbone from 'backbone';
import './../styles/main.scss';
import $ from 'jquery';
import BurgerView from '../viewss/BurgerView';

let newBurger = new BurgerView();
newBurger.render();
$('body').append(newBurger.$el);