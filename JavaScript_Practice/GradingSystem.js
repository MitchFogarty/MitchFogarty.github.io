let students = [] //empty array to store student objects
// function to add a student to the students array
const addStudent = (persName, grades) => {
    const student = {
        persName: persName,
        grades: grades,
        status: "Pending"
    };
    students.push(student);
}

//function that is passed student object to calculate grade average
const calculateAverage = student => {
    if(student.grades.length === 0) {
        return "N/A";
    }
    let total = student.grades.reduce((acc, grade) => acc + grade, 0);
    return total / student.grades.length;
}

//function that is passed a student object to calculate grades status
const updateStudentStatus = student => {
    let average = calculateAverage(student);
    if (average === "N/A") {
        student.status = 'Pending';
    } else if (average >= 60) {
        student.status = "Pass";
    } else {
        student.status = "Fail";
    }
}

// Code Testing
addStudent("James", [75, 88, 36]);
addStudent("Tiffany", [29, 55, 45, 10]);
students.forEach(student => {
    console.log(calculateAverage(student));
    updateStudentStatus(student);
    console.log(student.status);
});