var x = document.getElementById("score");

function increase() {
  counter++;
  x.innerHTML = counter;
}

function decrease() {
  counter--;
  x.innerHTML = counter;
}

function move() {
  var y = document.getElementById("up");
  var z = document.getElementById("down");
  y.style.top = Math.round(Math.random() * 100) + "%";
  y.style.left = Math.round(Math.random() * 100) + "%";  
  z.style.top = Math.round(Math.random() * 100) + "%";
  z.style.left = Math.round(Math.random() * 100) + "%";  
}