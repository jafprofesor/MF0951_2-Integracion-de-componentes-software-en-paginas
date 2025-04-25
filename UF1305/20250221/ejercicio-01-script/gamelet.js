const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let positionY = 0;
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }

  /*Flecha arriba abajo*/
  if (e.code === "ArrowDown") {
    positionY = positionY + 10;
  }
  if (e.code === "ArrowUp") {
    positionY = positionY - 10;
  }
  if (positionY < 0) {
    positionY = 0;
  }

  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = positionY + "px";
}
