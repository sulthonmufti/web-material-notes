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
//Operator pengurangan
function totalKurang(){
    const sub_first = Number(document.getElementById('kurangsatu').value);
    const sub_second = Number(document.getElementById('kurangdua').value);
    const subtraction_result = sub_first - sub_second;
    
    document.getElementById('hasil-kurang').innerText = "Hasil pengurangan: " + subtraction_result;
}
//Operator pembagian
function totalBagi(){
    const dis_first = Number(document.getElementById('bagisatu').value);
    const dis_second = Number(document.getElementById('bagidua').value);
    const distribution_result = dis_first / dis_second;
    
    document.getElementById('hasil-bagi').innerText = "Hasil pembagian: " + distribution_result;
}

//toggle
function toggleSegment(element){
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');

    //penulisan biasa (terlalu panjang):
    // if (parent.classList.contains('active')) {
    //     span.innerText = '-';
    // } else {
    //     span.innerText = '+';
    // }
    //pake Ternary Operator:
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

//perbandingan loose equality (==)
function loose_Equality(){
    const loose_first = Number(document.getElementById('loose-angka').value);
    const loose_second = String(document.getElementById('loose-pembanding').value);

    const loose_hasil = (loose_first == loose_second);

    document.getElementById('hasil-cek-loose-equality').innerText = "Hasil cek " + loose_first + " dan " + loose_second + " adalah: " + loose_hasil;
    document.getElementById('hasil-cek-loose-equality').style.color = "rgb(0, 255, 0)";
}

//perbandingan strict equality (===)
function strict_Equality(){
    const strict_first = Number(document.getElementById('strict-angka').value);
    const strict_second = String(document.getElementById('strict-pembanding').value);

    const strict_hasil = (strict_first === strict_second);

    document.getElementById('hasil-cek-strict-equality').innerText = "Hasil cek " + strict_first + " dan " + strict_second + " adalah: " + strict_hasil;
    document.getElementById('hasil-cek-strict-equality').style.color = "red";
}