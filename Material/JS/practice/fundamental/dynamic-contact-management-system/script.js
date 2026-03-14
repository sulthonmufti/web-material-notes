let contact = [];
let counter = 0;

displayData();
showStatistic();

function addContact(){
    const contactName = document.getElementById('form-name').value;
    const contactEmail = document.getElementById('form-email').value;
    const contactNumber = document.getElementById('form-telephone').value;

    //kirim data sebagai parameter, agar variable inputan dapat diakses di function validateInput();
    if (!validateInput(contactName, contactEmail, contactNumber)) {
        return; //stop kalo validasi gagal
    }
    //versi pemula/mudah dibaca:
    // if (validateInput(contactName, contactEmail, contactNumber) === false) {
    //     return;
    // }
    
    counter++;
    const contactObject = {
        id: counter,
        name: contactName,
        email: contactEmail,
        telepon: contactNumber,
        createAt: new Date().toISOString()
    };
    contact.push(contactObject);

    document.getElementById('form-name').value = '';
    document.getElementById('form-email').value = '';
    document.getElementById('form-telephone').value = '';
    document.getElementById('notification').innerHTML = '';

    console.table(contact);

    displayData();
    showStatistic();
}

function validateInput(contactName, contactEmail, contactNumber){
    const emailValidate = contact.find(contact => contact.email === contactEmail);

    if(contact.length >= 10){
        document.getElementById('notification').innerHTML = `<p>Data kontak sudah mencapai maksimum 10 data!</p>`;
        return false;
    }else if(contactName === "" || contactName.length < 3) {
        document.getElementById('notification').innerHTML = `<p>Input nama tidak valid!</p>`;
        return false; //tidak akan masuk obj

    } else if(!contactEmail.includes('@') || !contactEmail.includes('.')){
        document.getElementById('notification').innerHTML = `<p>Input email harus mengandung (@) dan . (dot)!</p>`;
        return false;
    }else if (contactNumber.length < 10 || contactNumber.length > 13) {
        document.getElementById('notification').innerHTML = `<p>Panjang nomor telepon 10-13 karakter!</p>`;
        return false;
    }else if (emailValidate) {
        document.getElementById('notification').innerHTML = `<p>Email ${contactEmail} sudah digunakan!</p>`;
        return false;
    }else{

        return true; //mengembalikan nilai function jadi true, jadi bisa lanjut dieksekusi masuk ke object di function addContact();
    }
}

function displayData(){
    const display = document.getElementById('table');
    
    if (contact.length === 0) {
        display.innerHTML =  `<p>DATA KOSONG!</p>`;
        return;
    }
    let makingTable = `
    <table class="table">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Telephone</th>
            <th>Number</th>
            <th>Create Date</th>
            <th>Action</th>
        </tr>
    `;

    for (const i of contact) {
        makingTable += `
        <tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.email}</td>
            <td>${i.telepon}</td>
            <td>${i.createAt}</td>
            <td><button onclick="deleteData(${i.id})"=>Delete</button</td>
        </tr>
        `;
        console.info(display);
    }

    makingTable += `</table>`;
    display.innerHTML = makingTable;
}

function searchingData(){
    const resultSearch = document.getElementById('table');
    
    const search = document.getElementById('searching').value;

    let tableResult = `
        <table class="table">
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Create Date</th>
                <th>Action</th>
            </tr>`;
    
    if (search == "") {
        tableResult += `<tr><td colspan="5">Silahkan masukkan data terlebih dahulu!</td></tr>`;
    }else{
        //trim() buang spasi depan/blakang, untuk case sensitice includes()
        const searchLower = search.toLowerCase().trim();
        console.log(search);

        //cek dulu ada data yang sama engga, +lower case, +case sensitive
        const found = contact.filter(
            c => c.name.toLowerCase().includes(searchLower)
        );

        if (found.length == 0) {
            tableResult += `
                <tr>
                    <td colspan="5">Data tidak ditemukkan!</td>
                </tr>`;
            
            document.getElementById('searching').value = '';
        }else{
            //bisa juga pake forEach,for of sama forEach sama-sama buat iterasi array,
            //bedanya kalo forEach sintaksnya lebih modern (style functional programming), tapi gabisa pake 'break'/'continue', cuman lebih umum dipake di project nyata,:
            //found.forEach(index => {
            for (const index of found) {

                tableResult += `
                    <tr>
                        <td>${index.id}</td>
                        <td>${index.name}</td>
                        <td>${index.email}</td>
                        <td>${index.telepon}</td>
                        <td>${index.createAt}</td>
                        <td><button onclick="deleteData(${index.id})"=>Delete</button</td>
                    </tr>
                    `;
            }
            document.getElementById('searching').value = '';
        }
    }
    tableResult += `</table>`;
    console.info(tableResult);
    resultSearch.innerHTML = tableResult;

}

function showStatistic(){
    const statistic = document.getElementById('output-statistic');

    if(contact.length == 0){
        statistic.innerHTML = `<p>DATA KOSONG!</p>`;
        return;
    }

    //sorting data by date
    const sortedByDate = [...contact].sort(
        (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );

    const oldest = sortedByDate[0]; //kontak terlama
    const newest = sortedByDate[sortedByDate.length - 1]; //kontak terbaru

    statistic.innerHTML = `
        <p>Total kontak: ${contact.length}</p>
        <p>Kontak terbaru: ${newest.name} (${newest.createAt.slice(0,10)})</p>
        <p>Kontak terlama: ${oldest.name} (${oldest.createAt.slice(0,10)})</p>
        `;
}

function deleteData(id){

    if (confirm("Are you sure want to delete this data?") == true) {
        //cari data yang punya id sama kaya parameter
        const index = contact.findIndex(
            c => c.id === id
        );

        if (index !== -1) {
            contact.splice(index, 1); //hapus 1 element di posisi index
            displayData();
            showStatistic();
        }
    }else{
        alert("Data batal dihapus:D");
        return;
    }
}