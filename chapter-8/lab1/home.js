const tableElement = document.querySelector("tbody");

const data = JSON.parse(localStorage.getItem("data"));

data.forEach((item) => {
  tableElement.innerHTML += `<tr><td>${item.id}</td><td>${item.content}</td><td><button>delete</button></td></tr>`;
});

const buttonList = document.querySelectorAll("button");
buttonList.forEach((item) => {
  item.addEventListener("click", () => {
    const deleteNode = item.parentNode.parentNode;
    const idRemove = deleteNode.firstChild.innerHTML;
    tableElement.removeChild(deleteNode);

    const data = JSON.parse(localStorage.getItem("data"));
    const newData = data.filter((item) => item.id != idRemove);

    localStorage.setItem("data", JSON.stringify(newData));
  });
});
