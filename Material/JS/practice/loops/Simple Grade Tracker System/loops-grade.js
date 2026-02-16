//simpan data student
let students = [];
function addData(){
    nameStudent = document.getElementById('input-name').value;
    score = parseFloat(document.getElementById('input-score').value);

    //  checking double name
    const nameValidation = students.find(students => students.name === nameStudent);
    
    //validation dulu sebelum dimasukin ke object
    if (nameStudent == "" || isNaN(score)) {
        document.getElementById('caution').innerText = "Data input tidak valid!"
        document.getElementById('caution').style.color = "red";

    }else if(students.length === 5){
        document.getElementById('caution').innerText = "Jumlah data telah mencapai maksimum"
        document.getElementById('caution').style.color = "red";

    }else if(nameValidation){
        document.getElementById('caution').innerText = `Data ${nameStudent} sudah ada!`
        document.getElementById('caution').style.color = "red";

    }else if (0 > score || score > 100) {
        document.getElementById('caution').innerText = "Nilai tidak valid! rentang nilai 0 - 100"
        document.getElementById('caution').style.color = "red";
    }else {
        //kalo semua udah valid baru masukin dan buat object nya,
        //penulisan (ES5) - buat objectnya dulu trus masukin ke array:
        const studentObj = {
            name: nameStudent,
            score: score
        }
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
    statistic();
}

function displayTable(){
    let show = document.getElementById('output-data');

    if (students.length === 0) {
        show.innerHTML = `<p style="color: gray; text-align: center;">Belum ada data siswa!</p>`;
        return;
    }
    let tableHtml =`
        <div id="table-wrap">
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
    tableHtml += `
            </table>
        </div>`;
    show.innerHTML = tableHtml;
}


function reset(){

    let confirmation = confirm("Apakah kamu yakin ingin menghapus semua data siswa?");
    if (confirmation) { 
        const panjangArray = students.length;
        students.length = 0;

        displayTable();
        statistic();

        document.getElementById('caution').innerText = `${panjangArray} Data siswa telah dihapus!`
        document.getElementById('caution').style.color = "orange";
        console.table(students);
    } else {
        alert("Hapus data dibatalkan:)");
    }
}

function statistic(){
    let statik = document.getElementById('output-statistik');
    if (students.length === 0) {
        statik.innerHTML = `
            <p style="color: gray;">Nilai rata-rata kelas: -</p>
            <p style="color: gray;">Nilai tertinggi: -</p>
            <p style="color: gray;">Nilai terendah: -</p>
            <p style="color: gray;">Total siswa: -</p>`;
        return;
    }

    //nilai tertinggi
    let highScore = students[0].score;
    let highName = students[0].name;
    for (let checkGrade = 0; checkGrade < students.length; checkGrade++) {
        if (highScore <= students[checkGrade].score) {
            highScore = students[checkGrade].score;
            highName = students[checkGrade].name;
        }
        
    }
    //nilai terendah
    let lowScore = students[0].score;
    let lowName = students[0].name;
    for (let checkGrade = 0; checkGrade < students.length; checkGrade++) {
        if (lowScore >= students[checkGrade].score) {
            lowScore = students[checkGrade].score;
            lowName = students[checkGrade].name;
        }
        
    }

    //cari average
    let total = 0 ;
    for (let count = 0; count < students.length; count++) {
        total += students[count].score;
    }
    const average = total / students.length;

    //check
    console.info(`total ${total}`);
    console.info(`average ${average}`);
    console.info(`panjang ${students.length}`);

    //output
    statik.innerHTML = `
        <p><i class="fa-solid fa-check" style="color: rgb(94, 255, 0)"></i> Nilai rata-rata kelas: ${average}</p>
        <p><i class="fa-solid fa-check" style="color: rgb(94, 255, 0)"></i> Nilai tertinggi: ${highName}(${highScore})</p>
        <p><i class="fa-solid fa-check" style="color: rgb(94, 255, 0)"></i> Nilai terendah: ${lowName}(${lowScore})</p>
        <p><i class="fa-solid fa-check" style="color: rgb(94, 255, 0)"></i> Total siswa: ${students.length}</p>`;
}