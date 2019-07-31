import _ from 'loadsh';

import './index.css';
import Logo from './logo.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());