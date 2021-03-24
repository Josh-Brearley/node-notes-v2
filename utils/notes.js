const fs = require("fs");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("src/notes.json");
    const notesJson = dataBuffer.toString();
    return JSON.parse(notesJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (allNotes) => {
  const notesJson = JSON.stringify(allNotes);
  fs.writeFileSync("src/notes.json", notesJson);
};

const addNote = (myNote) => {
  const allNotes = loadNotes();
  allNotes.push({ reminder: myNote });
  saveNotes(allNotes);
};

const listNotes = () => {
  const allNotes = loadNotes();

  allNotes.map((note, index) => {
    console.log(`${index + 1}. ${note.reminder}`);
  });
};

const removeNote = (noteToDelete) => {
  const allNotes = loadNotes();

  try {
    const itemToDelete = noteToDelete - 1;
    console.log(allNotes[itemToDelete]);
    console.log(noteToDelete.remove);
    const removedItem = allNotes.splice(itemToDelete, 1);
    console.log(removedItem);
    console.log(`Successfully removed ${removedItem[0].reminder}`);
  } catch (error) {
    console.log("Number out of range");
  }

  saveNotes(allNotes);
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
};
