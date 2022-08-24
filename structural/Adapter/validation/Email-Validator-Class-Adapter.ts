import isValidatorEmail from "validator/lib/isEmail";
import { EmailValidatorClassProtocol } from "./Email-Validator-Protocol";

export class EmailValidorClassAdapter implements EmailValidatorClassProtocol {
  isEmail(value: string): boolean {
    return isValidatorEmail(value);
  }
}
