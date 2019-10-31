console.log(emplyeeArr)

// task 1
function ExamplegetFormatDate(stringToSplit, separator) {
    let arrFormDate = stringToSplit.split(separator);
    console.log(arrFormDate.join(' / '));

}
 let dateCreate = '31,12,2019';
 let comma = ',';

 ExamplegetFormatDate(dateCreate, comma);

//  task 2
 let namesArr = ['yoUliYa', 'mikHaiL', 'vlad', 'AnnA'];

 let getNamesAsString = function(namesArr) {
    let nameAsString = namesArr.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    });
    return nameAsString.join(' ,')
} 
console.log(getNamesAsString(['yoUliYa', 'mikHaiL', 'vlad', 'AnnA']))

// task 3
function getRandomEmail(id) {
    let result = '';
    for(let i = 0; i < emplyeeArr.length; i++){
        if(emplyeeArr[i].id === id){
            result += emplyeeArr[i].name + emplyeeArr[i].surname + emplyeeArr[i].workExperience
        }
    }
    return result.toLowerCase() + '@itcloud.com'
};

console.log(getRandomEmail(0))
 
// task 4
function getFullName(id) {
    let result = '';
    for (let i = 0; i < emplyeeArr.length; i++){
        if (emplyeeArr[i].id === id){
            if (emplyeeArr[i].gender === 'male'){
                result += 'Mr.'
            }
            if (emplyeeArr[i].gender === 'female'){
            result += 'Ms.'
        }
        result += emplyeeArr[i].name + ' ' + emplyeeArr[i].surname
        }
    }
    return result
}

console.log(getFullName(0))
console.log(getFullName(4))

let getFullNameEmail = id = emplyeeArr.map(item => {
    if (item.gender === "male") {
        return `Mr. ${item.name} ${item.surname}`
    } 
    else 
        return `Mrs. ${item.name} ${item.surname}`   
});

console.log(getFullNameEmail[3])

let getFullNameEm = id = emplyeeArr.map(item => 
    item.gender === 'male' ? `Mr. ${item.name} ${item.surname}`: `Mrs. ${item.name}${item.surname}`  
);

console.log(getFullNameEm[5])

// clock

  var d = new Date();
var n = d.toLocaleTimeString();
console.log(("The time is: \n"+n));


  Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

console.log(Date())



let clock = function() {
    setInterval(() => {
      let date = new Date();
      console.clear()
      console.log(`${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds()}`) 
    },1000)
  }

  console.log(clock())

