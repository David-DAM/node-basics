//Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json =>  console.log(json))
    .catch(err => console.log(err));