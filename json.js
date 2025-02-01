const object = {
    name: 'John',
    age: 30,
    city: 'New York'
}

console.log(object.name)
const jsonStr = JSON.stringify(object);
console.log(jsonStr)

const studentA = {
    fname: 'Bonnie',
    sname: 'Lassie',
    age: 25,
    grade: 1.9,
    city: 'Boston'
}

const studentB = {
    fname: 'Britney',
    sname: 'Spears',
    age: 25,
    grade: 3.6,
    city: 'Los Angeles'
}

const dismiss = (student) => {
    if (student.grade > 2){
        const stdStr = JSON.stringify(student);
        console.log(stdStr);
    } else{
        console.log("คุณ " + student.fname + " พ้นสภาพ");
    }

}

dismiss(studentA);
dismiss(studentB);