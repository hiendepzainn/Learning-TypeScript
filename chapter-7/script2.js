// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`hehe`);
//   }, 1500);

//   let success = true;

//   if (success) {
//     resolve("Thành công!"); // khi hoàn thành
//   } else {
//     reject("Thất bại!"); // khi có lỗi
//   }
// });

// myPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(`Completed!`);
//   });
//--------------------------------------------------------------

// const wait = (time) => {
//   return new Promise((resolve, reject) => {
//     if (time < 0) {
//       reject(`Time must be positive!`);
//     }

//     setTimeout(() => {
//       resolve(`Done after ${time}ms`);
//     }, time);
//   });
// };

// wait(-2000)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log(`error: ${response}`);
//   });

//---------------------------------------------------------------

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(`Invalid ID`);
      return;
    } else {
      setTimeout(() => {
        resolve({
          id,
          name: "User" + id,
        });
      }, 1000);
    }
  });
};

// getUserData(2)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log(`error: ${response}`);
//   });

Promise.all([getUserData(1), getUserData(2), getUserData(3)])
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(`error: ${response}`);
  });
