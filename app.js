const notes = require('./utils.js');
const chalk = require('chalk');
const yargs = require('yargs');   //Yargs parses the command line parameters

// working with arguments in command line
// console.log(process.argv);   //Argument Vector (all the arguments provided) 1.nodejs executable 2.file path, 3.arguments
// console.log(yargs.argv);
// const command = process.argv[2];

yargs.version = "1.1.0";
// Create command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder:{ 
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'body of the new note',
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder: {
    title: {
      describe: "The note title to remove",
      require: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'Reading a note',
  handler: function () {
    console.log(chalk.blue("Your notes:"));
    notes.listNotes().forEach((element, index) => {
      console.log(`${index+1}. ${element.title}`);
    });
  }
});

// Delete command
yargs.command({
  command: 'read',
  describe: 'Reading just one note',
  builder:{ 
    title: { 
      require: true, 
      describe: "Title of the note to read",
      type: 'string'
    }
  },
  handler(argv) {
    const note = notes.findNote(argv.title);
    if(note){
      console.log(chalk.green('Your note:'));
      console.log(chalk.green(note.body));
    } else {
      console.log(chalk.red('Note not found!'));
    }
  }
});

// Parse all the arguments
yargs.parse();
