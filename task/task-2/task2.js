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
function grade(nilai) {
    switch (parseNilai(nilai)) {
        case nilai >= 90:
            return 'A';
        case nilai >= 80:
            return 'B';
        case nilai >= 70:
            return 'C';
        case nilai >= 60:
            return 'D';
        default:
            return 'E';
    }
}
console.log(parseNilai(nilaiUN));
console.log(grade(nilaiUN));