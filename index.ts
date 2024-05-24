import inquirer from "inquirer";

async function userData() {
const answer = await inquirer.prompt([ //inquirer specific-syntax--prompt
  {
    type: "input", //no string type input is Type from Inquirer
    name: "name",
    message: "What's your name?"
  },
  {
    type: "number",
    name: "age",
    message: "How old are you?"
  },
  {
    type: "list", //dropdown menu from inquirer, but we don't provide the type of list
    name: "gender",
    message: "What is your gender?",
    choices: ['Male', 'Female', 'Other', 'Prefer Not to Say'] // choice is inquirer specific syntax
  }
  ]);
  console.log("Your name is " + answer.name + ", you are " + answer.age + " years old, and you identify as " + answer.gender);
};

userData();


