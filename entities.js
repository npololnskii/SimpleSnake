function Ceil(x, y) {
    this.X = x;
    this.Y = y;
    this.compare = function(ceil) {
        return this.X == ceil.X && this.Y == ceil.Y;
    }
}

function Rabbit() {
    this.X = 100;
    this.Y = 100;
    this.getNewRabbit = function(exclude) {
        isInSnake = false;

        do {
            this.X = Math.floor(Math.floor(Math.random() * (snakeField.width - 1)) / CEIL) * CEIL;
            this.Y = Math.floor(Math.floor(Math.random() * (snakeField.height - 1)) / CEIL) * CEIL;
            for (var i = 0; i < exclude.length; i++) {
                if (exclude[i].X == this.X && exclude[i].Y == this.Y)
                    isInSnake = true;
            }
        } while (isInSnake)
    }

}

function Snake() {
    this.rabbit;
    this.ceil;
    this.direction;
    this.score;
    var self = this;
    this.move = function() {

        for (var i = this.ceil.length - 1; i > 0; i--) this.ceil[i] = this.ceil[i - 1];

        this.ceil[0] = new Ceil(this.ceil[0].X + CEIL * this.direction.x, this.ceil[0].Y + CEIL * this.direction.y);

        if (this.ceil[0].compare(this.rabbit)) {
            this.rabbit.getNewRabbit(this.ceil);

            this.ceil[this.ceil.length] = new Ceil(this.ceil[0].X + CEIL * this.direction.x, this.ceil[0].Y + CEIL * this.direction.y);
        }
        if (this.ceil[0].X > snakeField.width || this.ceil[0].Y > snakeField.height || this.ceil[0].X < 0 || this.ceil[0].Y < 0) {
            alert('Collision!!!');
            this.init();

        }
        for (var i = 1; i < this.ceil.length; i++) {
            if (this.ceil[0].compare(this.ceil[i])) {
                alert('Collision!!!2 ');
                this.init();
            }


        }
    }
    this.init = function() {
        console.log('INIT ');
        this.rabbit = new Rabbit();
        this.ceil = [new Ceil(3 * CEIL, 0), /*,new Ceil(70, 70),*/ new Ceil(2 * CEIL, 0), new Ceil(CEIL, 0), new Ceil(0, 0)];
        this.direction = {
            x: 1,
            y: 0
        }


    }
    this.changeDirection = function() {
        //  var keyCode = window.event.keyCode;
        var keyCode = event.keyCode;
        switch (keyCode) {

            case 37:
                if (self.direction.x != 1) {
                    console.log('left ');
                    self.direction.x = -1
                    self.direction.y = 0;
                    break;
                }
            case 39:
                if (self.direction.x != -1) {

                    self.direction.x = 1;
                    self.direction.y = 0;

                    console.log('right ');
                    break;
                }
            case 38:
                if (self.direction.y != 1) {
                    self.direction.y = -1;
                    self.direction.x = 0;
                    console.log('up');
                    break;
                }
            case 40:
                if (self.direction.y != -1) {
                    self.direction.y = 1;
                    self.direction.x = 0;
                    console.log('down');
                    break;
                }
        }

    }

}
