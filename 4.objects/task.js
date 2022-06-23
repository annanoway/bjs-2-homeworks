function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const student1 = new Student("Антон", "male", 19)
const student2 = new Student("Алиса", "female", 18)
const student3 = new Student("Андрей", "male", 19)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined){
  let marks = [];
  this.marks = marks;
  this.marks.push(mark)
} else {
  this.marks.push(mark)
}
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
  let marks = [];
  this.marks = marks;
  for(let i of mark) {
    this.marks.push(i);
  }
} else {
  for(let i of mark) {
    this.marks.push(i);
  }
}
}

Student.prototype.getAverage = function () {
  const sum = 
  this.marks.reduce ((acc, item) => {
    return acc + item
  }, 0)
  
  return sum / (this.marks.length)
  }

  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;

    this.excluded = reason;
  }