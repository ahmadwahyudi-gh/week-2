const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  //validasi tipeData
  if (
    typeof nilaiAwal !== "number" ||
    typeof nilaiAkhir !== "number" ||
    typeof dataArray !== "object"
  ) {
    return "Tipe data tidak sesuai"
  }
  //validasi data yg diinputkan tidak boleh kurang dari nol
  if (nilaiAwal < 0 || nilaiAkhir < 0) {
    return "Nilai tidak boleh negatif"
  }
  //validasi data yg diinputkan tidak boleh lebih dari 100
  if (nilaiAwal > 100 || nilaiAkhir > 100) {
    return "Nilai tidak boleh lebih dari 100"
  }
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai awal tidak boleh lebih besar dari nilai akhir"
  }
  //validasi data yg diinputkan tidak boleh kosong
  if (dataArray.length === 0) {
    return "Data tidak boleh kosong"
  }

  let newArray = []
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) {
      newArray = [...newArray, dataArray[i]]
    }
  }
  for (let i = 1; i < newArray.length; i++) {
    if (newArray[i - 1] > newArray[i]) {
      let temp = newArray[i - 1]
      newArray[i - 1] = newArray[i]
      newArray[i] = temp;
    }
  }
    return newArray;
};

console.log(seleksiNilai(10, 900, [10, 20, 30, 40, 50, 60, 70, 80, 90, 900]));
