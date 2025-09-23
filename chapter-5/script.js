const productList = [
  {
    name: "T-shirt",
    price: 300,
    inStock: true,
  },
  {
    name: "Blouse",
    price: 400,
    inStock: false,
  },
  {
    name: "Jean",
    price: 500,
    inStock: true,
  },
  {
    name: "Hat",
    price: 100,
    inStock: true,
  },
  {
    name: "Shouse",
    price: 400,
    inStock: false,
  },
];

console.log(`Ten san pham dau tien: ${productList[0].name}`);

console.log(`-------------------------------------------`);

console.log(`Thay doi Price san pham t2 -> 150: `);
productList[1].price = 150;
console.log(productList);

console.log(`-------------------------------------------`);

console.log(`Them 1 san pham moi: `);
const newProduct = {
  name: "gloves",
  price: 70,
  inStock: true,
};
productList.push(newProduct);
console.log(productList);

console.log(`-------------------------------------------`);

console.log(`Xoa san pham cuoi cung:`);
productList.pop();
console.log(productList);

console.log(`-------------------------------------------`);

console.log(`Tat ca ten san pham:`);
productList.forEach((item) => {
  console.log(item.name);
});

console.log(`-------------------------------------------`);

console.log(`Mang price san pham:`);
const priceList = productList.map((item) => {
  return item.price;
});
console.log(priceList);

console.log(`-------------------------------------------`);

console.log(`Cac san pham con hang:`);
const inStockList = productList.filter((item) => item.inStock === true);
console.log(inStockList);

console.log(`-------------------------------------------`);

console.log(`Thuoc tinh cua san pham:`);
for (const key in productList[0]) {
  console.log(key);
}
