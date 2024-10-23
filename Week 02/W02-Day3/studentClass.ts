import { Student } from "./interface";


class StudentsRecord {
    private studentsRecord: Student[] = []
    constructor() {
        console.log("Object has been created");
    }

    public addStudent(studentData: Student): Student {
        this.studentsRecord.push(studentData)
        return studentData
    }

    public getAllStudentsRecord(): Student[] {
        return this.studentsRecord
    }
}

const newStudentRecord = new StudentsRecord()
const data:Student={
    name:"Ans",
    age:34,
    scores:[34,45,23]
}
const result = newStudentRecord.addStudent(data)
const response = newStudentRecord.getAllStudentsRecord()
console.log("Student add successfully" , result);
console.log("All students",response);





