/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
   var KEY = {
       "UP": 38,  //up arrow key
       "DOWN": 40, //down arrow key
       "W": 87, //up
       "S": 83, //down
   }
   
  // Game Item Objects
function GameObject(id) {
  return{
    id: id,
    x: parseFloat($(id).css('left')),
    y: parseFloat($(id).css('top')),
    width: $(id).width(),
    height: $(id).height(),
    speedX: 0,
    speedY: 0
  }
}
var leftPaddle = GameObject('#leftPaddle'); 
var rightPaddle = GameObject('#rightPaddle');
var ball = GameObject("#ball");
var boardHeight = jQuery(window).height();

ball.speedX = 1;
ball.speedY = 1;

  //UI Elements 
  var scorePlayer1 = 0;
  var scorePlayer2 = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyup); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
     moveGameItem(leftPaddle);
     moveGameItem(rightPaddle);
     moveGameItem(ball);
      
     if (doCollide(ball, leftPaddle) === true){
      ball.speedX = -1; // bounce ball off left paddle
     }
     if (doCollide(ball, rightPaddle) === true){
      ball.speedX = 1; // bounce ball off right paddle
     }
     if (boardHeight < leftPaddle.y){
       leftPaddle.y = 422;
     } 
     if (boardHeight < rightPaddle.x){
      rightPaddle.x = 422;
    }
        
  }
  

  
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
     if (event.which === KEY.UP){
          leftPaddle.speedY = -5;
      }else if(event.which === KEY.DOWN){
          leftPaddle.speedY = 5;
      } else if (event.which === KEY.W){
          rightPaddle.speedY = -5;
      } else if(event.which === KEY.S){
          rightPaddle.speedY = 5;
      }
        
  }
    function handleKeyup(event) {
      if (event.which === KEY.W){
         rightPaddle.speedY = 0;
      }else if(event.which === KEY.S){
         rightPaddle.speedY = 0;
      }else if (event.which === KEY.UP){
          leftPaddle.speedY = 0;
      }else if (event.which === KEY.DOWN){
          leftPaddle.speedY = 0;
      }
 }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function doCollide(square1, square2) {
    // TODO: calculate and store the remaining
    // sides of the square1
    square1.leftX = square1.x;
    square1.topY = square1.y;
    square1.bottomY = square1.y + square1.height; 
    square1.rightX = square1.x + square1.width;
    
    // TODO: Do the same for square2
    square2.leftX = square2.x;
    square2.topY = square2.y;
    square2.bottomY = square2.y + square2.height; 
    square2.rightX = square2.x + square2.width;
  
    // TODO: Return true if they are overlapping, false otherwise
	if (square1.rightX > square2.leftX &&
        square1.leftX < square2.rightX &&
        square1.bottomY > square2.topY &&
        square1.topY < square2.bottomY) {
      return true;
    }
  else{
    return false;
  }
}
 function moveGameItem(whichOBject){
    whichOBject.x += whichOBject.speedX;
    whichOBject.y +=  whichOBject.speedY; 

  $(whichOBject.id).css("left", whichOBject.x);  
  $(whichOBject.id).css("top", whichOBject.y);  
 }
}
