// alert("hello");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var i = 0;
$(document).on("keypress",function(){
  nextSequence();
  $("h1").html("Level 1");
});

function playSound(name){
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function nextSequence(){
   userClickedPattern =[];
  i = i + 1;
  var randomNumber = Math.floor(Math.random() * 4) ;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColour);
  $("h1").html("Level "+i);
  console.log(gamePattern);
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100);

}

 $(".btn").click( function() {

   var userChosenColour = $(this).attr('id');
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
   console.log(userChosenColour);
 });

function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    if (userClickedPattern.length === gamePattern.length){


    console.log("success");
    setTimeout(function(){
      nextSequence();

    },1000);}
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
    console.log("fail");
  }

}

function startOver(){
  i = 0 ;
  gamePattern = [];

}
