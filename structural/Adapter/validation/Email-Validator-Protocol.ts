export interface EmailValidatorClassProtocol {
  isEmail: EmailValidatorFunctionProtocol;
}

export interface EmailValidatorFunctionProtocol {
  (value: string): boolean;
}
