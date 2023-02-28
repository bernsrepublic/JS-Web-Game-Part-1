//   alert(test); to check if the js is working with the html
//   Additional Notes:
//   Changes made:
// - removed "position" in the function parameter for newImage
// - re-arranged the function and invoking codes sequence/order
// - added the "px" property-value in the function
// - fixed the relevant path of the image. somehow using "../" doesn't work.

function tile(url, left, bottom, width, height) {
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      newImage(url, left + w * 100, bottom + h * 100);
    }
  }
}
let newImage = (src, left, bottom) => {
  let object = document.createElement("img");
  object.src = src;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
};
function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  item.addEventListener("click", function () {
    item.remove();
    let inventoryItem = document.createElement("img");
    inventoryItem.src = url;
    inventory.append(inventoryItem);
  });
}

let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile("assets/sky.png", 0, horizon, window.innerWidth / 100, heightOfSky / 100);
tile("assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

let inventory = document.createElement("div");
function newInventory() {
  // let inventory = document.createElement("div"); move outside to become global
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
}

newInventory();
newImage("assets/green-character.gif", 100, 250);
newImage("assets/tree.png", 200, 450);
newImage("assets/pillar.png", 350, 250);
newImage("assets/pine-tree.png", 450, 350);
newImage("assets/crate.png", 150, 350);
newImage("assets/well.png", 500, 575);
newItem("assets/sword.png", 500, 555);
newItem("assets/sheild.png", 165, 335);
newItem("assets/staff.png", 600, 250);
