function sayHello(){
    const name = document.getElementById('input-name').value;
    const result = cek(name);
    const greetingName = document.getElementById('greeting').innerText = result;
}

//PENULISAN BIASA:
// function cek(a){
//     if (a === "") {
//         return "Harap isi nama anda!"
//     } else {
//         return `Hai ${a}! selamat datang di Portal :D`;
//     }
// }

//PENULISAN TERNARY OPERATOR:
// function cek(a){
//     return (a === "") ? "Harap isi nama anda!" : `Hai ${a}! selamat datand di Portal :D`;
// }

//PENULISAN ARRAOW FUNCTION:
 const cek = (a) => (a === "") ? "Harap isi nama anda!" : `Hai ${a}! Selamat datang di Portal :D`;  //ganti (!a || a.trim() === "") lebih aman jaga' ngatasin Null & spasi)


function count(){
    const number1 = document.getElementById('input-number1').value;
    const number2 = document.getElementById('input-number2').value;
    const counting = countingResult(number1, number2);
    const hasil = document.getElementById('hasil').innerText = counting;
}

function countingResult(number1 , number2){
    if (number1 === "" || number2 ==="") {
        return "Harap isi dulu angka yang ingin dihitung!";
    } else {
        return Number(number1) * Number(number2);
    }
}