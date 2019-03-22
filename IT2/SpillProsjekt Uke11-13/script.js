// for det meste tatt fra noen andres kkode
var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 540;
context.canvas.width = 960;

rectangle = {

    height:32,
    jumping:true,
    width:32,
    x:144, //
    x_velocity:0,
    y:0,
    y_velocity:0

};

controller = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event) {

        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode) {

            case 37:// left key
                controller.left = key_state;
                break;
            case 38:// up key
                controller.up = key_state;
                break;
            case 39:// right key
                controller.right = key_state;
                break;

        }

    }

};

loop = function() {

    if (controller.up && rectangle.jumping == false) {

        rectangle.y_velocity -= 50; //hvor høyt den hopper
        rectangle.jumping = true;

    }

    if (controller.left) {

        rectangle.x_velocity -= 1; //farten til firkanten, venstre

    }

    if (controller.right) {

        rectangle.x_velocity += 1; //farten til firkanten, høyre

    }

    rectangle.y_velocity += 3   ;// gravity, hvor sakte den faller/går opp
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9;// friction
    rectangle.y_velocity *= 0.9;// friction

    // if rectangle is falling below floor line
    if (rectangle.y > 540 - 16 - 32) {

        rectangle.jumping = false;
        rectangle.y = 540 - 16 - 32;
        rectangle.y_velocity = 0;

    }

    // if rectangle is going off the left of the screen
    if (rectangle.x < -32) {

        rectangle.x = 960;

    } else if (rectangle.x > 960) {// if rectangle goes past right boundary

        rectangle.x = -32;

    }

    context.fillStyle = "#202020";
    context.fillRect(0, 0, 960, 540);// x, y, width, height
    context.fillStyle = "#0e8f6d";// farge
    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(960, 164);
    context.stroke();

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);