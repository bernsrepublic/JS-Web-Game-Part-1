//alert(test);
const newImage = (src, position, left, bottom) => {
  let object = document.createElement("img");
  object.src = src;
  object.style.position = position;
  object.style.left = left;
  object.style.bottom = bottom;
  document.body.append(object);
  return object;
};

newImage("../assets/green-character.gif", "fixed", "100px", "100px");
newImage("../assets/pine-tree.png", "fixed", "450px", "200px");
newImage("../assets/tree.png", "fixed", "200px", "300px");
newImage("../assets/pillar.png", "fixed", "350px", "100px");
newImage("../assets/crate.png", "fixed", "150px", "200px");
newImage("../assets/well.png", "fixed", "500px", "425px");

const newItem = (src, position, left, bottom) => {
  let object = newImage(src, position, left, bottom);
  object.addEventListener("dblc'lick", () => {
    object.remove();
  });
};

newItem("../assets/sword.png", "fixed", "500px", "405px");
newItem("../assets/sheild.png", "fixed", "165px", "185px");
newItem("../assets/staff.png", "fixed", "600px", "100px");

function tile(src, left, bottom, width, height) {
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      newImage(src, left + w * 100, bottom + h * 100);
    }
  }
}
let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile(
  "../assets/sky.png",
  0,
  horizon,
  window.innerWidth / 105,
  heightOfSky / 100
);
tile("../assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);
// let sword = document.createElement("img");
// sword.src = "assets/sword.png";
// sword.position = "fixed";
// sword.left = "500px";
// sword.bottom = "405px";
// document.body.append(sword);

// sword.addEventListener("click", function () {
//   sword.remove();
// });

// let greenCharacter = document.createElement("img");
// greenCharacter.src = "assets/green-character.gif";
// greenCharacter.style.position = "fixed";
// greenCharacter.style.left = "100px";
// greenCharacter.style.bottom = "100px";
// document.body.append(greenCharacter);

// let pineTree = document.createElement("img");
// pineTree.src = "assets/pine-tree.png";
// pineTree.style.position = "fixed";
// pineTree.style.left = "450px";
// pineTree.style.bottom = "200px";
// document.body.append(pineTree);
