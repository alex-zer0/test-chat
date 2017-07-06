import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
  bindings: {
    messages: '<'
  },
  template,
  controller
};

export default homeComponent;
