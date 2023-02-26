const newImage = (src, position, left, bottom) => {
  let greenCharacter = document.createElement("img");
  greenCharacter.src = src;
  greenCharacter.style.position = position;
  greenCharacter.style.left = left;
  greenCharacter.style.bottom = bottom;
  document.body.append(greenCharacter);
};
newImage("../assets/green-character.gif", "fixed", "100px", "100px");
newImage("../assets/pine-tree.png", "fixed", "450px", "200px");
newImage("../assets/tree.png", "fixed", "200px", "300px");
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
