let addBtn = document.querySelector("#add-to-do");
let toDoItemText = document.querySelector("#enter-to-do");
console.log(toDoItemText);

function addListItem() {
  let parent = document.querySelector(".to-dos");
  let createListItem = document.createElement("li");
  let createPtags = document.createElement("p");
  let iconBox = document.createElement("div");
  iconBox.className = "icon-box";
  createListItem.appendChild(iconBox);

  createPtags.innerHTML = "📌 " + toDoItemText.value;
  createPtags.className = "to-do-text";
  createListItem.className = "to-do-el";

  for (let i = 0; i < 2; i++) {
    let iconPath = ["./images/trash-can.png", "./images/rounded-rectangle.png"];
    let createImage = document.createElement("img");
    createImage.src = iconPath[i];
    createImage.width = 32;
    createImage.className = `delete${i}`;
    let fristIcon = iconBox.appendChild(createImage);
    if (fristIcon.className === "delete0") {
      fristIcon.addEventListener("click", () => {
        parent.removeChild(createListItem);
      });
    }

    if (fristIcon.className === "delete1") {
      fristIcon.addEventListener("click", () => {
        let getSrc = fristIcon.getAttribute("src");
        let newSrc =
          getSrc === "./images/rounded-rectangle.png"
            ? "./images/approve-sign.png"
            : "./images/rounded-rectangle.png";

        if (newSrc === "./images/approve-sign.png") {
          createPtags.classList.add("done-task");
        } else {
          createPtags.classList.remove("done-task");
        }

        fristIcon.setAttribute("src", newSrc);
      });
    }
  }

  createListItem.appendChild(createPtags);
  let inputValue = toDoItemText.value;
  if (toDoItemText && inputValue) {
    parent.appendChild(createListItem);
  }

  toDoItemText.value = "";
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addListItem();
  }
});
