function generatePassword() {
  let password = "";
  let characterSet = "";
  let passwordLength = getPasswordLength();

  const hasLowerCaseLetters = window.confirm(
    "Should generated password contain lower case letters?"
  );

  const hasUpperCaseLetters = window.confirm(
    "Should generated password contain upper case letters?"
  );

  const hasNumbers = window.confirm(
    "Should generated password contain numbers?"
  );

  const hasSymbols = window.confirm(
    "Should generated password contain symbols?"
  );
  if (hasLowerCaseLetters) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (hasUpperCaseLetters) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (hasNumbers) {
    characterSet += "0123456789";
  }

  if (hasSymbols) {
    characterSet += "!@#$%^&*(()//:";
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    const randomCharacter = characterSet[randomIndex];

    password += randomCharacter;
  }
  const passwordTextArea = document.getElementById("password");
  passwordTextArea.innerHTML = password;
}

generatePassword();

function getPasswordLength() {
  let stringPasswordLength = "";
  let passwordLength = 0;
  let failedValidation = true;

  while (failedValidation) {
    stringPasswordLength = window.prompt("Type in a number between 8 and 128");
    passwordLength = Number.parseInt(stringPasswordLength);
    failedValidation =
      passwordLength < 8 ||
      passwordLength > 128 ||
      Number.isNaN(passwordLength);
  }
  return passwordLength;
}
