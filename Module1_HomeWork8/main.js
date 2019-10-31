let books = [];
function newBooks(url) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
             xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=quilting=${url}:keyes&key=AIzaSyCcwNc_KhJYS3LQwzvEpRXHB3m4pMGeo_U`);
             xhr.onload = () => {
                 const book = JSON.parse(xhr.responseText);
                 resolve(book);
                 console.log(book)
             }
             xhr.onerror = () => {
                 const err = JSON.parse(xhr.responseText);
                 reject(err)
             }
             xhr.send()

    })
};
console.log(newBooks(10))

const getBooks = async () => {
    for (let i = 0; i < 10; i++) {
        let result = await newBooks(i);
        books = [...books,...result.items];  
    }

}
console.log(getBooks())