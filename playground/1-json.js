const fs = require('fs');

// Working eith JSON
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan holiday'
};

// read the fiel and convert json to object 
const file = fs.readFileSync('1-json.json');
const dataJSON = file.toString();
const dataObj = JSON.parse(dataJSON);

// Change the data 
dataObj.name = 'Jose Andres Castaneda Forno';
dataObj.age = 23;
dataObj.job = "Software developer";

// parse from object to json a write in the file 
const newJson = JSON.stringify(dataObj);
fs.writeFileSync('1-json.json', newJson);

// Reading the result
const newFile = fs.readFileSync('1-json.json').toString();


console.log(newFile);