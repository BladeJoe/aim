function getRandomPosition() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var targetWidth = document.querySelector('.target').offsetWidth;
  var targetHeight = document.querySelector('.target').offsetHeight;  
  var maxX = windowWidth - targetWidth;
  var maxY = windowHeight - targetHeight;  
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);  
  return { x: randomX, y: randomY };
}

function newPosition() {
  var target = document.querySelector('.target');
  var newPosition = getRandomPosition();
  target.style.left = newPosition.x + 'px';
  target.style.top = newPosition.y + 'px';
}