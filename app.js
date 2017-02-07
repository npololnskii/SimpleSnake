
  var snake = new Snake();
  snake.init();
  document.onkeydown = snake.changeDirection;
  var timer = setInterval(function() { drawSnake(snake);}, 200);
