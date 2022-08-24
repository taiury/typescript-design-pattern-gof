import isValidatorEmail from "validator/lib/isEmail";
import { EmailValidatorFunctionProtocol } from "./Email-Validator-Protocol";

export const emailValidatorFunctionAdapter: EmailValidatorFunctionProtocol = (
  value: string
): boolean => {
  return isValidatorEmail(value);
};
