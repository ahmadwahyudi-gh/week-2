const nilaiUN = {
    'mtk': 80,
    'bhsindo': 90,
    'bhsinggris': 89,
    'ipa': 69,
}
function parseNilai(nilai) {
    let total = 0;
    let jumlah = 0;
    for (let key in nilai) {
        total += nilai[key];
        jumlah++;
    }
    return total / jumlah;
}
average=parseNilai(nilaiUN);
console.log(average);
function grade(average) {
    switch (true) {
        case average>= 90:
            return'A';
        case average >= 80:
            return 'B';
        case average >= 70:
            return 'C';
        case average >= 60:
            return 'D';
        default:
            return 'E';
    }
}
console.log(parseNilai(nilaiUN));
console.log(grade(average));