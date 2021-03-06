class User {
  constructor(id, name, email, sex, friends = [], schedules = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.sex = sex;
    this.friends = friends;
    this.schedules = schedules;
  }
}
