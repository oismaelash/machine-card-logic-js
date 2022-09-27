import * as readline from "node:readline";
import * as transaction from "./transaction.js";
import * as account from "./modules/account/index.js";
import * as constants from "./constants.js";

var readerCLI = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var history = [];

function main() {
  readerCLI.question(constants.QUESTION_USER, answerUser);
}

function answerUser(answer) {
  const ANSWER_LOWER = answer.toLowerCase();

  switch (ANSWER_LOWER) {
    case constants.CREATE_NAME:
      readerCLI.question("> ", function (jsonReceived) {
        let result = account.createAccount(jsonReceived);
        history.push(result);
      });
    case constants.TRANSACTION_NAME:
      readerCLI.question("> ", function (jsonReceived) {
        let result = transaction.execute(jsonReceived);
        history.push(result);
      });
      break;
    case constants.EXIT_NAME:
      exitHandler();
      break;
    case constants.HISTORY_NAME:
      console.log(history);
      break;
    default:
      console.log(history);
      main();
      break;
  }
}

function exitHandler() {
  console.log(history);
  console.log("obrigado");
  readerCLI.close();
}

main();
