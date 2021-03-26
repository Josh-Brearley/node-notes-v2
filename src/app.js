const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");
const { addNote, listNotes, removeNote } = require("../utils/notes");

const topLevelQuestion = [
  {
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["add", "remove", "list", "exit"],
  },
];

const addQuestion = [
  { type: "input", name: "add", message: "What would you like to add?" },
];

const removeQuestion = [
  {
    type: "input",
    name: "remove",
    message: "What would you like to remove? Enter a number.",
  },
];

const main = () => {
  console.log(chalk.blue(figlet.textSync("Notes")));
  app();
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);

  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    addNote(answer.add);
    app();
  } else if (answers.options == "list") {
    listNotes();
    app();
  } else if (answers.options == "remove") {
    listNotes();
    const answer = await inquirer.prompt(removeQuestion);
    removeNote(answer.remove);
    app();
  } else if (answers.options == "exit") {
    console.log("See ya soon");
  }
};

main();
