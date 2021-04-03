/**
 * User Model
 */
export class User {
  constructor(params) {
    const {
      id,
      firstName,
      lastName,
      dob,
      email,
      sex,
      friends = [],
      schedules = [],
    } = params;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.email = email;
    this.sex = sex;
    this.friends = friends;
    this.schedules = schedules;
  }

  toString() {
    const str = [
      this.id,
      this.firstName + " " + this.lastName,
      this.dob,
      this.email,
      this.sex,
      this.friends,
      this.schedules,
    ];

    return str.join(", ");
  }
}
