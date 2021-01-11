(function() {
  'use strict';

  const button = document.getElementById('button');

  console.log('foo');
  button.onclick = () => {
    console.log('pushed button')
    document.body.requestFullscreen();
  }
})();