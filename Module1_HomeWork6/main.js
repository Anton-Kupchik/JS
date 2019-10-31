console.log(studentsArr)

class Student {
    constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.course = course;
        this.startYear = startYear;
        this.endYear = endYear;
        this.selfPayment = selfPayment;
        this.faculty = faculty;
        this.ratingPoint = ratingPoint;
    }
    aboutMe() {
        return 'I am' + ' ' + this.name + ',' + ' ' +  'student' + ' ' + this.course + ' ' + 'faculty' + ' ' + this.faculty + '!';
    }
    getsortByRatingPoint() {
        let sortByRatingPoint = [...studentsArr]
        sortByRatingPoint.sort((a,b) => {
            if (a.ratingPoint > b.ratingPoint) return -1;
            if (a.ratingPoint < b.ratingPoint) return 1;
            if (a.ratingPoint == b.ratingPoint) return 0;
           
        })
        let index = sortByRatingPoint.findIndex(student => student.id === this.id);
        return index + 1
    }
   
}

let student = new Student(0, "Anton", "Kupchikov", 1, 2019, 2023, false, "JS", 95)
console.log(student)
console.log(student. aboutMe())

console.log(student.getsortByRatingPoint())

let student2 = new Student(6, 'Vlad', 'Nesterenko', 1, 2019, 2023, false, 'JS', 79)
console.log(student2.getsortByRatingPoint())

class Intern extends Student {
    constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint,companyName) {
    super(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint);
    this.companyName = companyName;
   
    }
    aboutMe() {
        return 'I am' + ' ' + this.name + ',' + ' ' +  'student' + ' ' + this.course + ' ' + 'faculty' + ' ' + this.faculty + ',' + 'intern company' + ' ' + this.companyName + '!';
    }
    get currentCourse() {
        let today = new Date();
        let year = today.getFullYear();
          return (year - this.startYear) + 1;
        
    } 
    
    set currentCourse(course) {
        let today = new Date();
        let year = today.getFullYear();
        this.startYear = (year - this.course) + 1;
        this.endYear = (year - this.course) + 5; 
         
    
    }

}

let intern = new Intern(0, "Anton", "Kupchikov", 1, 2019, 2023, false, "JS", 95, 'Microsoft') 
console.log(intern)


console.log(intern.aboutMe())
intern.currentCourse = 1;
console.log(intern.currentCourse)
console.log(intern)
