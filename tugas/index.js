let films = [];

function AddFilm() {
  films.push({
    Nama: document.getElementById("NamaFilm").value,
    Tgl: document.getElementById("TglRilis").value,
    Kode: document.getElementById("KodeFilm").value,
  });

  this.showfilm();
}

function showfilm() {
  let content = "";
  console.log(films);
  films.forEach((Film) => {
    content =
      content +
      `
     <p>Judul film : ${Film.Nama}</p>
        <p>Tanggal Film : ${Film.Tgl}</p>
        <p>Kode Film: ${Film.Kode}</p>
        `;
  });
  document.getElementById("ListFilm").innerHTML = content;
}
