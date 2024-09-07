let books = [];

function addBook() {
  let indexBuku = books.findIndex(
    (book) => book.kode == document.getElementById("kodebuku").Value
  );

  console.log(indexBuku);
  if (indexBuku > -1) {
    books.split(indexBuku, 1);
  }
  books.push({
    kode: document.getElementById("kodebuku").value,
    judul: document.getElementById("namebuku").value,
    author: document.getElementById("Authorbuku").value,
  }
)

  this.showbooks();
}

function showbooks() {
  let content = "";
  console.log(books);
  books.forEach((element) => {
    content =
      content +
      `
        <p>Judul film : ${element.judul}</p>
        <p>Kode film : ${element.kode}</p>
        <p>Judul film : ${element.author.split(",").join(" dan ")}</p>
        `;
  });
   document.getElementById("isibuku").innerHTML = content;
}