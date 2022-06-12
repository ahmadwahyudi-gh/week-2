fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    result.forEach((users) => {
      console.log(users.name);
    });
  })
  .catch((err) => console.log(err));

/* Soal 4
Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
https://jsonplaceholder.typicode.com/users
Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya
*/
