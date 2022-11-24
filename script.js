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
