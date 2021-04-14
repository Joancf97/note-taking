const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was created by nodejs');
fs.appendFileSync('notes.txt', 'this is the append message');