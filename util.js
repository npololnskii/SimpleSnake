function drawCeil(ceil) {

    ctx.fillStyle = 'green';
    ctx.fillRect(ceil.X, ceil.Y, CEIL, CEIL);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(ceil.X, ceil.Y, CEIL, CEIL);
    ctx.strokeRect(0, 0, snakeField.width, snakeField.height);

}

function drawRabbit(rabbit) {
    ctx.fillStyle = 'red';
    ctx.fillRect(rabbit.X, rabbit.Y, CEIL, CEIL);
}

function clearFiled(ceil) {
    ctx.clearRect(0, 0, snakeField.width, snakeField.height);
}

function drawSnake(snake) {
    clearFiled(snake.ceil[i]);
    drawRabbit(snake.rabbit);
    snake.move();
    for (var i = 0; i < snake.ceil.length; i++) drawCeil(snake.ceil[i]);

}
