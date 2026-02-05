//fungti untuk segment-header dropdown
function toggleSegment(element){
    const parent = element.parentElement;
    parent.classList.toggle('active');

    //ubah tanda + jadi -
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

//fungsi Let
function testLet(){
    let skor = 50;
    skor = 100; //menambah nilai skor (bisa berubah)
    console.log("Nilai Let Skor", skor);
    document.getElementById('hasil-demo').innerText = "Let berhasil diubah menjadi: " + skor;
    document.getElementById('hasil-demo').style.color = "green";
}

//fungsi Const
function testConst(){
    const nama = "qwerty";
    try {
        nama = "asdfg" //akan error karena const tidak bisa diubah
    } catch (err) {
        console.error("Error Terdeteksi:", err.message);
        document.getElementById('hasil-demo').innerText = "Gagal mengubah nilai const (cek F12)";
        document.getElementById('hasil-demo').style.color = "red";
    }
}

//tambahan, untuk segment-content ke dua
//fungsi Let2
function testLet2(){
    let skor2 = 505;
    skor = 1002; //menambah nilai skor (bisa berubah)
    console.log("Nilai Let Skor", skor);
    document.getElementById('hasil-demo2').innerText = "Let berhasil diubah menjadi: " + skor2;
    document.getElementById('hasil-demo2').style.color = "green";
}

//fungsi Const2
function testConst2(){
    const nama2 = "ggggg";
    try {
        nama2 = "zzzzz" //akan error karena const tidak bisa diubah
    } catch (err) {
        console.error("Error Terdeteksi:", err.message);
        document.getElementById('hasil-demo2').innerText = "Gagal mengubah nilai const (cek F12)";
        document.getElementById('hasil-demo2').style.color = "red";
    }
}