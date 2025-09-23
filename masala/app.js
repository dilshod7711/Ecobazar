// 1-misol

class Shape {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
    this.PI = Math.PI;
  }

  getArea1() {
    console.log(this.PI * (this.r * this.r));
  }
}
class Square extends Shape {
  constructor(a) {
    super(a);
  }
  getArea2() {
    console.log(this.a * 2);
  }
}
class Rectangle extends Shape {
  constructor(a, b) {
    super(a, b);
  }
  getArea3() {
    console.log(this.a * this.b);
  }
}

// 2-misol

let res1 = new Circle(5);
let res2 = new Square(3);
let res3 = new Rectangle(7, 11);
res3.getArea3();
res2.getArea2();
res1.getArea1();

class Student {
  constructor(id, name, grades) {
    this.id = id;
    this.name = name;
    this.grades = grades;
  }
  getFullInfo() {
    console.log(this.id, this.name, this.grades[0]);
  }
  addGrade(grade) {
    this.grades.push(grade);
  }
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += Number(this.grades[i]);
    }
    let urtacha = sum / this.grades.length;
    console.log(urtacha);
  }
}
let user1 = new Student(1, "Dilshod", ["1", "2", "3"]);
user1.getFullInfo();
user1.addGrade("4");
user1.addGrade("5");
user1.getAverage();
console.log(user1);
