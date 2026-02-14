//simpan data student
let students = [];
function addData(){
    nameStudent = document.getElementById('input-name').value;
    score = document.getElementById('input-score').value;

    //penulisan (ES5) - buat objectnya dulu trus masukin ke array:
    const studentObj = {
        name: nameStudent,
        score: score
    }

    //  checking double name
    const nameValidation = students.find(students => students.name === nameStudent);

    if (nameStudent == "" || score === "") {
        document.getElementById('caution').innerText = "Masukkan data terlebih dahulu!"
        document.getElementById('caution').style.color = "red";

    }else if(students.length === 5){
        document.getElementById('caution').innerText = "Jumlah data telah mencapai maksimum"
        document.getElementById('caution').style.color = "red";

    }else if(nameValidation){
        document.getElementById('caution').innerText = "Data sudah ada!"
        document.getElementById('caution').style.color = "red";

    }else if (0 > score || score > 100) {
        document.getElementById('caution').innerText = "Nilai tidak valid! rentang nilai 0 - 100"
        document.getElementById('caution').style.color = "red";
    }else {
        //hapus caution kalau sebelumnya ada
        document.getElementById('caution').innerText = '';
        document.getElementById('caution').style.color = '';

        //PUSH DATA OBJ KE ARRAY
        students.push(studentObj);   
    }

    //kosongin input abis diisi
    document.getElementById('input-name').value = '';
    document.getElementById('input-score').value = '';
    console.table(students);

    //penulisan (ES6) - langsung masukin object ke array (lebih ringkas):
    // students.push(studentObj = {nameStudent, scoreStudent});
    // console.table(students); //hasilnya sama 

    displayTable();
}

function displayTable(){
    let show = document.getElementById('output-data');

    if (students.length === 0) {
        show.innerHTML = `<p style="color: gray;">Belum ada data siswa!</p>`;
        return;
    }
    let tableHtml =`
        <table class="student-table">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Nilai</th>
                    <th>Grade</th>
                </tr>`;
    let nomor = 1;
    for (let data of students) {
        
        if (90 <= data.score) {
            grade = "A";
        } else if (80 <= data.score) {
            grade = "B";
        }else if (70 <= data.score) {
            grade = "C";
        }else if (60 <= data.score) {
            grade = "D";
        }else{
            grade = "E";
        }

        tableHtml += `
            <tr>
                <td>${nomor}</td>
                <td>${data.name}</td>
                <td>${data.score}</td>
                <td>${grade}</td>
            </tr>`;
        

        nomor++; //menambahkan counter buat jadi nomor baris table
        
        console.info(show);
    }
    //tutup table
    tableHtml += `</table>`;
    show.innerHTML = tableHtml;
}


function reset(){

    let confirmation = confirm("Apakah kamu yakin ingin menghapus semua data siswa?");
    if (confirmation) { 
        const panjangArray = students.length;
        students.length = 0;

        displayTable();

        document.getElementById('caution').innerText = `${panjangArray} Data siswa telah dihapus!`
        document.getElementById('caution').style.color = "orange";
        console.table(students);
    } else {
        alert("Hapus data dibatalkan:)");
    }
}