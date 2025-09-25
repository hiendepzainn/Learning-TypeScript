const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");

buttonElement.addEventListener("click", () => {
  const newObject = {
    id: Math.floor(Math.random() * 100000),
    content: inputElement.value,
  };

  console.log(newObject);

  const currentData = localStorage.getItem("data");
  if (currentData === null) {
    localStorage.setItem("data", JSON.stringify([newObject]));
  } else {
    localStorage.setItem(
      "data",
      JSON.stringify([...JSON.parse(currentData), newObject])
    );
  }

  window.location.href = "home.html";
});
