// recurso de terceiros
import isValidatorEmail from "validator/lib/isEmail";

// adapter Protocol
export interface EmailValidatorProtocol {
  isEmail(value: string): boolean;
}

// adapter class
export class EmailValidorAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isValidatorEmail(value);
  }
}
// implement adapter
export function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Email é válido");
  } else {
    console.log("Email é inválido");
  }
}

//client code
validaEmail(new EmailValidorAdapter(), "taiuryalexandre.c@gmail.com"); // Email é válido
validaEmail(new EmailValidorAdapter(), "taiuryalexandre.c@gmailcom"); // Email é inválido
