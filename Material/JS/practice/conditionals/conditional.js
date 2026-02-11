//cek nilai
function submit(){
    const nilai = document.getElementById('nilai-input').value;
    const green = document.getElementById('congrats');
    const orange = document.getElementById('caution');
    const red = document.getElementById('warning');

    if (nilai >= 75) {
        document.getElementById('congrats').innerText = `ANDA LULUS! nilai anda: ${nilai}`;
        green.style.color = "green";
    } else if(60 <= nilai){
        document.getElementById('caution').innerText = `REMIDI! batas KKN adalah 75 dan nilai anda: ${nilai}`;
        orange.style.color = "orange";
    }else{
        document.getElementById('warning').innerText = `TIDAK LULUS! batas toleransi remidi adalah 60 dan nilai anda: ${nilai}`;
        red.style.color = "red";
    }
}

//option color
function select(){
    let color = document.getElementById('select-color').value;
    let setColor = document.getElementById('output');
    switch (color) {
        case "red":
            setColor.style.backgroundColor = "red";
            break;
        
        case "blue":
            setColor.style.backgroundColor = "blue";
            break;
        case "yellow":
            setColor.style.backgroundColor = "yellow";
            break;
        default:
            setColor.style.backgroundColor = "white";
            break;
    }
}

//saklar
let lampuhidup = false;
function lampu(){
    lampuhidup = !lampuhidup;
    const status = lampuhidup ? "lampu hidup" : "lampu mati";
    document.getElementById('output-lampu').innerText = status;
    document.getElementById('output-lampu').style.color = lampuhidup ? "orange" : "black";
}