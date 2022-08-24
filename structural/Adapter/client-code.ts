import {
  emailValidatorFunctionAdapter as emailValidatorFnAdapter,
  EmailValidorClassAdapter,
  EmailValidatorClassProtocol,
  EmailValidatorFunctionProtocol,
} from "./validation";

function validaEmailClass(
  emailValidator: EmailValidatorClassProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Email é válido (CLASS)");
  } else {
    console.log("Email é inválido (CLASS)");
  }
}

function validaEmailFunction(
  emailValidator: EmailValidatorFunctionProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("Email é válido (FUNCTION)");
  } else {
    console.log("Email é inválido (FUNCTION)");
  }
}

// validator email class
validaEmailClass(new EmailValidorClassAdapter(), "taiuryalexandre.c@gmail.com"); // Email é válido (CLASS)
validaEmailClass(new EmailValidorClassAdapter(), "taiuryalexandre.c@gmailcom"); // Email é inválido (CLASS)

// validator email function
validaEmailFunction(emailValidatorFnAdapter, "taiuryalexandre.c@gmail.com"); // Email é válido (FUNCTION)
validaEmailFunction(emailValidatorFnAdapter, "taiuryalexandre.c@gmailcom"); // Email é inválido (FUNCTION)
