const yargs = require("yargs");

const { addNote, listNotes, removeNote } = require("../utils/notes");

const command = process.argv[2];

if (command == "add") {
  console.log("adding a note...");
  addNote(yargs.argv.note);
  // --note="insert note here"
} else if (command == "remove") {
  console.log("removing note...");
  removeNote(yargs.argv.note);
} else if (command == "list") {
  console.log("fetching notes...");
  listNotes();
} else {
  console.log("command not found");
}
