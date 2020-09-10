let userInput1: unknown;
let userName1: string;

userInput1 = 5;
userName1 = 'STR';

if (typeof userInput1 === 'string') {
  userName1 = userInput1;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code}
}

generateError('An error occurred', 500)


