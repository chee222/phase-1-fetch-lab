function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
}


function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching books');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
}
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching books');
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data); // Call the renderBooks function with the fetched data
      return data;
    })
    .catch(error => console.error(error));
}

function renderBooks(books) {
  var main = document.querySelector('main');
  books.forEach(function (book) {
    var h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

fetchBooks(); // Cal