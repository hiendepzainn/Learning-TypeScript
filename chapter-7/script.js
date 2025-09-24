// const readBook = (bookName, callback) => {
//   console.log(`Reading ${bookName}...`);
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const takeBreak = (callback) => {
//   console.log(`Breaking...`);
//   setTimeout(() => {
//     callback();
//   }, 1000);
// };

// const writeSummary = (callback) => {
//   console.log(`Writing summary...`);
//   setTimeout(() => {
//     callback();
//   }, 1500);
// };

// const done = () => {
//   console.log(`Completed all!`);
// };

// readBook(`React nang cao`, () => {
//   takeBreak(() => {
//     writeSummary(done);
//   });
// });

// ----------------------------------------------------------------------------------------
// function readBook(bookName) {
//   return new Promise((resolve) => {
//     console.log(`Reading ${bookName}...`);
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// }

// function takeBreak() {
//   return new Promise((resolve) => {
//     console.log(`Breaking...`);
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// function writeSummary() {
//   return new Promise((resolve) => {
//     console.log(`Writing summary...`);
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// readBook("React nang cao")
//   .then(() => takeBreak())
//   .then(() => writeSummary())
//   .then(() => {
//     console.log("Completed all!");
//   })
//   .catch((err) => {
//     console.error("Có lỗi xảy ra:", err);
//   });

//--------------------------------------------------------------------------------------

const login = (username, password, callback) => {
  console.log(`Checking infor...`);

  setTimeout(() => {
    if (username === "hienDX3" && password === "potatoUETFPTSoftware2601@") {
      callback("hienDX3");
    } else {
      console.log(`Invalid infor!`);
    }
  }, 1000);
};

const getUserInfor = (userID, callback) => {
  console.log(`Login success!  ID: ${userID}`);

  setTimeout(() => {
    callback("Dinh Xuan Hien");
  }, 1000);
};

const getUserCountLetter = (fullName, callback) => {
  console.log(`Name: ${fullName}`);

  setTimeout(() => {
    callback(3);
  }, 1000);
};

const announceLetter = (number) => {
  console.log(`Letter count: ${number}`);
};

login("hienDX3", "potatoUETFPTSoftware2601@", (idName) => {
  getUserInfor(idName, (fullName) => {
    getUserCountLetter(fullName, () => {
      announceLetter(3);
    });
  });
});
