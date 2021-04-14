const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Yout notes...';
}

// Add a note to the array of lists
const addNote = function (title, body) {
  // Get all the existing notes
  const notes = loadNotes();
  // Validate that the title doesnt exist yet
  const existing = notes.filter(elm => {
    return elm.title === title;
  })
  // Add the new one
  if(existing.length == 0){
    notes.push({
      title: title, 
      body: body
    });
  } else { 
    console.log("Note already exist");
  }
  // Save the notes 
  saveNotes(notes);
}

const removeNote = function(title){ 
  // Get all the existing notes
  const notes =  loadNotes();
  notes.forEach((element, index, object) => {
    if(element.title == title){
      object.splice(index,1);
      console.log(chalk.green("Note Deleted!"));
    }
  });
  // Save the notes 
  saveNotes(notes);
}

// Save a the json array of notes into the file
const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

// Loads all the notes from the notes.json file
const loadNotes =  function () {
  try {
    const dataBufer = fs.readFileSync('notes.json');
    const dataJSON = dataBufer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

// Export the funtions
module.exports = {
  'addNote': addNote,
  'getNotes': getNotes,
  'removeNote': removeNote
}