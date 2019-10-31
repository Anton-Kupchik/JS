// const xhr = new XMLHttpRequest();
// xhr.open('GET','/users')
// xhr.onload = () => {console.log(xhr.responseText)};
// xhr.send();

// let promiseObj = new Promise((reselve, reject) => {
//     setTimeout(() => {
//         reselve(5 + 5)
//     },1000);
// });
// console.log('Start',new Date().getSeconds())
// promiseObj.then(reselve => {
//     console.log(reselve)
//     console.log('End', new Date().getSeconds())
// })
// const fetchApi = url => {
//     return new Promise((reselve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.onload = () => {
//             const response = JSON.parse(xhr.responseText);
//             reselve(response);
//         };
//         xhr.onerror = () => {
//             const err = JSON.parse(xhr.responseText);
//             reject(err);
//         };
//         xhr.send();
//     });  
// }
// fetchApi('/users').then(reselve => {
//     console.log(reselve)
// });
class Fetch {
    constructor(id, name, surname){
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    get(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                }
                xhr.onerror = () => {
                    const err = JSON.parse(xhr.responseText);;
                    reject(err)
                }
                xhr.send()
            });
        }
    post(url, body) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.onload = () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                }
                xhr.onerror = () => {
                    const err = JSON.parse(xhr.responseText);;
                    reject(err)
                }
                xhr.send(JSON.stringify(body))
            });
    }
    getByParams (url, param) {
            return this.get(`${url}/${param}`)
        }
}
let fetch = new Fetch()

fetch.get('/users').then(resolve => {
    console.log(resolve)
});

fetch.post('/users', {name: 'Anton', surname: 'Kupchikov'}).then(resolve => {
    console.log(resolve)
});

fetch.getByParams('/users', 'petya').then(resolve => {
    console.log(resolve)
});

function newCount(){
    let count = 2;
    new Promise((resolve, reject)=> {
        setTimeout(()=>{
            count = count * 2
            resolve()
        },4000)
    })
    .then(resolve => {
        new Promise((resolve)=>{
         setTimeout(()=>{
            count = count + 1
            resolve()
        },3000)           
    }).then(()=> {
        console.log(count)
    })})
}
console.log(newCount())

function newCounter(){
    let count = 8;
    new Promise((resolve,reject)=> {
        setTimeout(()=>{
            count += 1;
            resolve();
        },3000)
    })
    .then(resolve => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                count /= 3;
                resolve();
            },2000)
        })
    })
    .then(resolve => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                count *= 4;
                resolve();
            },4000)
        }).then(()=> {
            console.log(count)
        })
    })
}
console.log(newCounter())

async function newCount1(){
    let count = 2;
   await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            count = count * 2
            resolve()
        },4000)
    })
      await new Promise((resolve)=>{
         setTimeout(()=>{
            count = count + 1
            resolve()
        },3000)           
    })
        console.log(count)
}
 console.log(newCount1())

async function newCounter1(){
    let count = 8;
    await new Promise((resolve,reject)=> {
        setTimeout(()=>{
            count += 1;
            resolve();
        },3000)
    })
      await new Promise((resolve)=>{
            setTimeout(()=>{
                count /= 3;
                resolve();
            },2000)
        })
        await new Promise((resolve)=>{
            setTimeout(()=>{
                count *= 4;
                resolve();
            },4000)
        })
        console.log(count);
}
console.log(newCounter1())