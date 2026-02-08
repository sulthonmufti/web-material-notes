//Operator perkalian
function totalKali(){
    const mul_first = document.getElementById('kalisatu').value; //lebih baik penulisannya: Number(document.getElementById('kalisatu').value); untuk - dan * gausah pake Number() tetap bisa tapi selain itu tidak bisa karena akan dianggap string (jadi misal 1 + 2 = "12")
    const mul_second = document.getElementById('kalidua').value;
    const multiplication_result = mul_first * mul_second;
    
    document.getElementById('hasil-perkalian').innerText = "Hasil perkalian: " + multiplication_result;
}
//Operator penjumlahan
function totalTambah(){
    const add_first = Number(document.getElementById('tambahsatu').value);
    const add_second = Number(document.getElementById('tambahdua').value);
    const addition_result = add_first + add_second;
    
    document.getElementById('hasil-tambah').innerText = "Hasil penjumlahan: " + addition_result;
}

//toggle
//penulisan biasa (terlalu panjang):
    // if (parent.classList.contains('active')) {
    //     span.innerText = '-';
    // } else {
    //     span.innerText = '+';
    // }
    //pake Ternary Operator:
    ///span.innerText = parent.classList.contains('active') ? '-' : '+';