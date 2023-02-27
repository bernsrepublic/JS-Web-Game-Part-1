//alert(test);
function tile(url, left, bottom, width, height) {
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      newImage(url, left + w * 100, bottom + h * 100);
    }
  }
}
const newImage = (src, left, bottom) => {
  let object = document.createElement("img");
  object.src = src;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
};
const newItem = (src, left, bottom) => {
  let object = newImage(src, left, bottom);
  object.addEventListener("dblc'lick", () => {
    object.remove();
  });
};

let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile("assets/sky.png", 0, horizon, window.innerWidth / 100, heightOfSky / 100);
tile("assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

newImage("assets/green-character.gif", 100, 100);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);
//****************************************************************** */
// function tile(src, left, bottom, width, height) {
//   for (let h = 0; h < height; h++) {
//     for (let w = 0; w < width; w++) {
//       newImage(src, left + w * 100, bottom + h * 100);
//     }
//   }
// }
// let horizon = window.innerHeight / 1.75;
// let heightOfSky = window.innerHeight - horizon;
// let heightOfGrass = horizon;

// tile(
//   "../assets/sky.png",
//   0,
//   horizon,
//   window.innerWidth / 105,
//   heightOfSky / 100
// );
// tile("../assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);
// ****************************************************************************
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
