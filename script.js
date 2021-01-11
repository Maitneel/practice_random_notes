(function() {
  'use strict';

  const button = document.getElementById('button');

  console.log('foo');
  document.getElementById('client').innerText = 'clientwidth  = ' + document.documentElement.clientWidth + '\n' + 'clientheight = ' + document.documentElement.clientHeight
  button.onclick = () => {
    console.log('pushed button')
    document.body.requestFullscreen();
  }
})();