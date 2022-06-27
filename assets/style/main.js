// let bintang = "";
// for(let i = 8; i >= 1; i -- ) {
//     for(let n = 0; n >= 1 - i; n -- ) { 
//         bintang += "*";
//     }
//     bintang += "\n";
// };

// console.log(bintang);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
