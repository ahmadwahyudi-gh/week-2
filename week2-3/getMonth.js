const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, months);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

const showMonth = (isError, months) => {
  if (isError === null) {
    const monthsOrder = months.map(
      (value, index) => (value += ` adalah bulan ke-${index + 1}`)
    );
    console.log(monthsOrder);
  } else {
    console.log(isError);
  }
};

getMonth(showMonth);

/* Soal 2
Buat program menggunakan callback function untuk melanjutkan
dan menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

Contoh: getMonth(showMonth?)
*/
