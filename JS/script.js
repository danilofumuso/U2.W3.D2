const form = document.querySelector("form");

const userName = document.getElementById("userName");

const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");
const List = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("name", userName.value);
  userName.value = "";
});

saveButton.addEventListener("click", () => {
  const li = document.createElement("li");
  const nameFromLocalStorage = localStorage.getItem("name");
  if (nameFromLocalStorage) {
    //questo controllo evita che si formi un list item quando il campo dell'input è vuoto!
    li.innerText = nameFromLocalStorage;
    li.classList.add("list-group-item");
    List.appendChild(li);
  }
});

deleteButton.addEventListener("click", () => {
  localStorage.removeItem("name");
  li.remove(); //non riesco a rimuovere il li!
});
