var ball;
var database; //namespacing

function setup(){
    createCanvas(500,500);

    //step 1 
    database = firebase.database();
    
    //read from the database
    //refer to the node
    var ballPosition = database.ref("ball/position");

    //read the data
    ballPosition.on("value",readPosition,showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val()
    console.log(position.y);
    ball.x = position.x
    ball.y = position.y
}

function showError(){
    console.log("no data found");
}

function changePosition(x,y){
   /* var ballPosition = database.ref("ball/position");
    ballPosition.set({
        "x":position.x + x,
        "y":position.y + y,
    })*/

    database.ref("ball/position").set({
        "x":position.x + x,
        "y":position.y + y,
    })
  
}
