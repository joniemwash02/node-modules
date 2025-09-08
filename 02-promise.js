const { readFile } = require("fs");
// const { result } = require("lodash");

const getTest = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// getTest('./content/first.txt')
// .then((resolt)=>console.log(resolt))
// .catch((err)=>console.log(err))

const start = async () => {
  try {
    const first = await getTest("./content/first.txt");
    const second = await getTest("./content/second.txt");
    console.log(` here is the combination of ${first} and ${second} files`);
  } catch (error) {
  console.log(error)
  
  }
};

start();
