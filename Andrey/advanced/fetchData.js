const myHeaders = new Headers();

const myRequest = new Request('http://localhost/dbWIP/data.json', {
  method: 'GET',
  headers: myHeaders,
  mode: 'no-cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.json())
  .then(data => console.log(data));