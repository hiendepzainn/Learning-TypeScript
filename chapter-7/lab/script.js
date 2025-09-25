const fetchData = async () => {
  const res = await fetch("http://localhost:3333/users");
  const data = await res.json();
  return data;
};

const insertData = (x) => {
  const tbodyElement = document.querySelector("tbody");
  let dataHTML = "";
  x.forEach((item) => {
    const subData = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`;
    dataHTML += subData;
  });
  tbodyElement.innerHTML = dataHTML;
};

const execute = async () => {
  const data = await fetchData();
  insertData(data);
};

execute();
