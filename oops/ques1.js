class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}
let student1 = new Student("Amit", [85, 90, 80]);
let student2 = new Student("Sara", [65, 70, 60]);
let student3 = new Student("Rahul", [30, 35, 40]);

let students = [student1, student2, student3];
students.forEach(student => {
    console.log(student.name);
    console.log(student.calculateAverage());
    console.log(student.getGrade());
});