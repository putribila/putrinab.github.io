"use strict"
let userName = 'Saya Putri Nabilla salam kenal';

function showMessage() {
  let userName = "Kawan"; // deklarasikan lokal variabel

  let message = 'Hello, ' + userName; // kawan
  alert(message);
}
// fungsi akan membuat dan menggunakan userName dirinya sendiri
showMessage();
alert( userName ); // Saya Putri Nabilla salam kenal, tidak berubah, fungsi tidak dapat mengakses variabel luar