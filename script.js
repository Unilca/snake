//create div,
//add "div" in body,
//add new class to field(<div>)
let field = document.createElement("div");
document.body.appendChild(field);
field.classList.add("field");

//break field into cells 10x10
//add 100 blocks to field, using loop (for)
for (let i = 1; i < 101; i++) {
  let excel = document.createElement("div");
  field.appendChild(excel);
  excel.classList.add("excel");
}

//create ccoordinates (bottom-left 1,1)
//using attribute assigment
let excel = document.getElementsByClassName("excel");
let x = 1;
let y = 10;

for (let i = 0; i < excel.length; i++) {
  excel[i].setAttribute("posX", x);
  excel[i].setAttribute("posY", y);
  x++;

  if (x > 10) {
    x = 1;
    y--;
  }
}

//generation rng start position (x,y) for snake
function generateSnake() {
  let posX = Math.round(Math.random() * (10 - 3) + 3);
  let posY = Math.round(Math.random() * (10 - 1) + 1);
  return [posX, posY];
}

//generation Snake on start position
let coordinates = generateSnake();

let snakeBody = [
  document.querySelector(
    '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
  ),
  document.querySelector(
    '[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'
  ),
  document.querySelector(
    '[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]'
  ),
];

//get class snakeBody to Snake elements
for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add("snakeBody");
}
snakeBody[0].classList.add("head");

//generation rng start position (x,y) for berry
let berry;
function createBerry() {
  function generateBerry() {
    let posX = Math.round(Math.random() * (10 - 1) + 1);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
  }

  let berryCoordinates = generateBerry();
  console.log(berryCoordinates);

  berry = document.querySelector(
    '[posX = "' +
      berryCoordinates[0] +
      '"][posY = "' +
      berryCoordinates[1] +
      '"]'
  );
  //not use snake cells
  while (berry.classList.contains("snakeBody")) {
    let berryCoordinates = generateBerry();
    console.log(berryCoordinates);

    berry = document.querySelector(
      '[posX = "' +
        berryCoordinates[0] +
        '"][posY = "' +
        berryCoordinates[1] +
        '"]'
    );
  }
  berry.classList.add("berry");
}

createBerry();
