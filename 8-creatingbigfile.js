const { writeFileSync } = require('fs');  // import writeFileSync from 'fs'

// Loop from 1 to 999
for (let i = 1; i < 1000; i++) {
  // Append "hello world <i>" to big.txt
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}
