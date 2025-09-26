const fetchAPI = async () => {
  const res = await fetch("http://localhost:2345/blogs");
  const data = await res.json();
  return data;
};

const addNewBlogs = async (item) => {
  await fetch("http://localhost:2345/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

const deleteBlog = async (id) => {
  await fetch(`http://localhost:2345/blogs/${id}`, {
    method: "DELETE",
  });
};

const execute = async () => {
  const data = await fetchAPI();

  let tbodyElement = document.querySelector("tbody");

  let html = "";

  data.forEach((item) => {
    html += `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.author}</td>
          <td>${item.content}</td>
          <td><button>delete</button></td>
        </tr>
    `;
  });

  tbodyElement.innerHTML = html;

  const deleteButtonList = document.querySelectorAll("td button");
  console.log(deleteButtonList);
  deleteButtonList.forEach((item) => {
    item.addEventListener("click", async () => {
      const idDelete = item.parentNode.parentNode.firstElementChild.innerHTML;
      console.log(idDelete);
      await deleteBlog(idDelete);
      await execute();
    });
  });
};

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const contentInput = document.getElementById("contentInput");

const saveElement = document.getElementById("saveButton");
saveElement.addEventListener("click", async () => {
  const newObject = {
    id: String(Math.floor(Math.random() * 100000000)),
    title: titleInput.value,
    author: authorInput.value,
    content: contentInput.value,
  };

  titleInput.value = "";
  authorInput.value = "";
  contentInput.value = "";

  await addNewBlogs(newObject);
  await execute();
});

execute();
