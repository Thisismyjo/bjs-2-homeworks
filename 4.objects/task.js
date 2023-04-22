function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  if ( this.marks === undefined || this.marks.length === 0) {
    return 0;      
  } else {
    return this.marks.reduce((acc, item, index, marks) => { acc += item; if(index === marks.length - 1) return acc / marks.length; return acc;}, 0)      
  }
}

Student.prototype.exclude = function (reason) {     
  delete this.marks;
  delete this.subject;
  this.excluded = reason;  
}
