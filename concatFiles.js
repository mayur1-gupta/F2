const fs = require('fs').promises;
async function readAndConcatFiles(file1, file2) {
try{
const datal = await fs.readFile(file1,'utf-8');
const data2 = await fs.readFile(file2,'utf-8');
const combinedData = datal + data2;
console. log(combinedData);
} catch (error) {
console-error ('Error reading files:', error);
}
}
readAndConcatFiles('file1.txt', 'file2.txt');