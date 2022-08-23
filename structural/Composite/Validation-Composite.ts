// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return /@/.test(value);
  }
}

// Leaf
export class ValidateLength extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return value.length > 18;
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]) {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// client code
const validateEmail = new ValidateEmail();
const validateLength = new ValidateLength();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail);

console.log(validationComposite.validate("exemple@email.com")); // true

validationComposite.add(validateLength);

console.log(validationComposite); //ValidationComposite { children: [ ValidateEmail {}, ValidateLength {} ] }
console.log(validationComposite.validate("exemple@email.com")); // false
