class People {
  constructor(name) {
    this.name = 'people'
  }
}

class Man extends People {
  constructor(name) {
    super(name);
    this.age = 27;
  }
}
