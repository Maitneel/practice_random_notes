(function() {
  'use strict';

  const button = document.getElementById('button');
  const check = document.getElementById('check');

  console.log('foo');
  check.onclick = () => {
    // document.getElementById('client').innerText = 'clientwidth  = ' + document.documentElement.clientWidth + '\n' + 'clientheight = ' + document.documentElement.clientHeight
    alert('clientwidth  = ' + document.documentElement.clientWidth + '\n' + 'clientheight = ' + document.documentElement.clientHeight)
  }
  button.onclick = () => {
    console.log('pushed button')
    document.documentElement.requestFullscreen();
  }
})();