// blok program
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};
// blok program

// callback function then catch
const printOutput = (cek) => {
  console.log(`${cek} adalah hari kerja`);
};

//then...catch
cekHariKerja("senin")
  .then(printOutput)
  .catch((err) => console.log(err));

// callback function try catch
// const printOutput = (cek) => {
//   return`${cek} adalah hari kerja`;
// };

// //try...catch
// const resultCekHariKerja = async (day, callback) => {
//   const result = await cekHariKerja(day);
//   try {
//     console.log(callback(day))
//   } catch (error) {
//     console.log(error);
//   } finally {
//   }
// };

// resultCekHariKerja("senin", printOutput)

/* Penjelasan then...catch & try...catch
then...catch
then catch merupakan method yang mereturn Promise. 
then digunakan ketika Promise berstatus fullfilled (terpenuhi).
catch digunakan ketika Promise berstatus rejected.

try...catch
try catch merupakan deklarasi synchronous
try digunakan untuk menulis blok kode yang akan dijalankan.
catch digunakan untuk menulis blok kode yang akan dijalankan ketika terjadi error pada try.
*/

/* Soal 1
Buatlah sambungan program menggunakan then catch dan juga try catch 
untuk mengecek hari kerja dari kode Asynchronous dibawah
dan jelaskan penggunaan then catch dan try catch
dengan memberikan komentar di bawahnya:

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

*/
