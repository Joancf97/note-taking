const fs = require('fs');
const chalk = require('chalk');

// Add a note to the array of lists
const addNote =  (title, body) => {
  // Get all the existing notes
  const notes = loadNotes();
  // Validate that the title doesnt exist yet
  const existing = notes.find(note => note.title === title);
  // Add the new one
  if(!existing){ 
    notes.push({
      title: title, 
      body: body
    });
    console.log(chalk.green("Note Added!"));
  } else { 
    console.log("Note already exist");
  }
  // Save the notes 
  saveNotes(notes);
}

const removeNote = (title) => { 
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


// Finde note 
const findNote = (title) => {
  const notes = loadNotes();
  return notes.find(elm => {
    if(elm.title === title){
      return elm;
    }
  });
}

// Save a the json array of notes into the file
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

// Loads all the notes from the notes.json file
const loadNotes =  () => {
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
  'removeNote': removeNote,
  'listNotes': loadNotes,
  'findNote': findNote
}