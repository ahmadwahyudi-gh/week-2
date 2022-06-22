const arkFood = (harga, voucher, jarak, isPajak) => {
  let potongan, nominalPajak, subTotal;

  if (voucher === manualLowerCase("ARKAFOOD5")) {
    if (harga > 100000) {
      potongan = 50000;
    } else if (harga > 50000) {
      potongan = 0.5 * harga;
    } else potongan = 0;
  } else if (voucher === manualLowerCase("DITRAKTIRDEMY")) {
    if (harga > 50000) {
      potongan = 30000;
    } else if (harga > 25000) {
      potongan = 0.6 * harga;
    } else potongan = 0;
  } else potongan = 0;
  console.log(`Potongan: ${potongan}`);

  const biayaAntar = jarak <= 2 ? 5000 : 5000 + (jarak - 2) * 3000;
  console.log(`Biaya Antar: ${biayaAntar}`);

  if (!isPajak) nominalPajak = 0;
  else nominalPajak = 0.05 * harga;
  console.log(`Pajak: ${nominalPajak}`);

  subTotal = harga - potongan + nominalPajak + biayaAntar;
  console.log(`Sub Total: ${subTotal}`);
  return subTotal;
};

const manualLowerCase = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (!(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)) {
      result += word[i];
    } else {
      let charToLowerCaseAscii = word.charCodeAt(i) + 32;
      let asciiToChar = String.fromCharCode(charToLowerCaseAscii);
      result += asciiToChar;
    }
  }
  return result;
};

arkFood(75000, "arkafood5", 5, true);