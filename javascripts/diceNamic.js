//jshint esversion: 7

let rollDie = function() {
  return Math.floor(Math.random() * 6 + 1);
};

let controller = () => {
  let target, die1, die2, rollCount = 0,
      die1URL, die2URL, imgElem1, imgElem2, outputMessage;

  //get the target number from the web page

  target = document.querySelector("input").value;
  console.log(target);

  //roll the target number and count rolls

  do{
    //roll the dice
    die1 = rollDie();
    die2 = rollDie();

    rollCount += 1;

    //increment the roll counter

    //log the dice and the counter

  } while(die1 + die2 != target);

  //Update images on web page

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  console.log(die2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);


  //display number of rolls on the web page

  outputMessage = `You hit your number in ${rollCount} roll${(rollCount ==1)?"":"s"}!`;
  document.querySelector("#outputDiv").innerHTML = outputMessage;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
