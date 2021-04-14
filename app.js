const notes = require('./utils.js');
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
  handler: function (argv) {
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
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

// List command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function () {
    console.log("reading a note");
  }
});

// Delete command
yargs.command({
  command: 'delete',
  describe: 'deleting a note',
  handler: function () {
    console.log("delet a note");
  }
});

// Parse all the arguments
yargs.parse();
