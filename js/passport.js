export default class Passport {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName.toLocaleLowerCase();
  }

  getLastName() {
    return this.lastName.toLocaleUpperCase();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return `${this.firstName[0]}.${this.lastName[0]}.`;
  }

  getIsValidName() {
    return this.firstName.length &&
      this.lastName.length >= 1 &&
      !this.lastName.endsWith(".")
      ? "Yes"
      : "No";
  }
}
