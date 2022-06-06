//1. toString() => mengubah number menjadi string.
const angka1 = 1,
  angka2 = 2;
const toStringed1 = angka1.toString(),
  toStringed2 = angka2.toString();
console.log(toStringed1 + toStringed2);

//2. search() => mencari posisi string yang dicari dalam suatu string, akan mereturn index ditemukannya string
const string1 = "Lorem ipsum dolor sit amet";
const searched = string1.search("sit");
console.log(searched);

// 3. substring() = mereturn string dari string dimulai dengan start pada parameter pertama dan end pada parameter kedua
const string2 = "the fox jumps over the lazy dog";
const substringed = string2.substring(3, 7);
console.log(substringed);

//4. concat() => menggabungkan 2 buah string atau array.
const arr1 = [7, 8, 9];
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr1.concat(arr2));

//5. toFixed() => membulatkan angka di belakang koma menjadi beberapa angka sesuai dengan parameter
const pi = 3.14159265359;
const numberFixed = pi.toFixed(3);
console.log(numberFixed);

//6. toExponential() => mereturn string yang ditulis dalam notasi eksponen
const angka3 = 49;
console.log(angka3.toExponential(5));

//7. slice() => memotong array sesuai dengan index start dan index akhir-1
const arr3 = [11, 12, 13, 14, 15];
const sliced = arr3.slice(2, 4);
console.log(sliced);

//8. pop() => menghapus index terakhir dari array dan mereturn index yang dihapus
const arr4 = [16, 17, 18];
const popped = arr4.pop();
console.log(popped);
console.log(arr4)

//9. shift() => menghapus index pertama dari array dan memindah index setelahnya ke index yang dihapus.
// Akan mereturn index yang dihapus.
const arr5 = [4, 5, 6];
const shifted = arr5.shift();
console.log(shifted);
console.log(arr5);

//10. unshift() => menambah elemen index pertama dari array dengan array baru
//Akan mereturn panjang array yang baru setelah ditambah elemen baru
const arr6 = [1, 2, 3];
const unshifted = arr6.unshift(5);
console.log(unshifted);
console.log(arr6);