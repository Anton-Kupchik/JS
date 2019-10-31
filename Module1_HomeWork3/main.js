console.log(emplyeeArr)
// 1)
function Employee(id, name, surname, salary, workExperience, isPrivileges, gender){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
    }
    
let employeerObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');


console.log(employeerObj)


// 2)
Employee.prototype.getFullName = function() {
    return `fullname: ${this.surname} ${this.name}`;
};
console.log(employeerObj.getFullName())

// 3)
const emplyeeConstructArr = emplyeeArr.map(student => employee = new Employee(student.id, student.name, student.surname, student.salary, student.workExperience, student.isPrivileges, student.gender));

console.log(emplyeeConstructArr)

// 4
function getFullNamesFromArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].getFullName());
    }
    return result;
}
console.log(getFullNamesFromArr(emplyeeConstructArr))

// 5
function getMidleSalary(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i].salary;
    }
    return (result / arr.length);
    console.log(result);
};
console.log(getMidleSalary(emplyeeConstructArr))

// 6 
function getRundomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRundomNumber(0,10))
// возвращает число с плавающей точкой

function getRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(0,10))
// возвращает целое число