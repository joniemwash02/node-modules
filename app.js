const { readFile, writeFile } = require("fs").promises;

const items = async () => {
  try {
    const firstFile = await readFile("content/first.txt", "utf8");
    const secondFile = await readFile("content/second.txt", "utf8");
    await writeFile('./content/newfile.txt',`final: ${firstFile} + ${secondFile}`,{flag: 'a'})
    console.log(firstFile, secondFile);
  } catch (error) {
    console.log(error)
  }
};
items();
