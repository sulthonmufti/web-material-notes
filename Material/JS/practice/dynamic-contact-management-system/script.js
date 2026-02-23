let contact = [];
let counter = 0;

displayData();

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

    displayData();

    console.table(contact);
}

function validateInput(contactName, contactEmail, contactNumber){
    const emailValidate = contact.find(contact => contact.email === contactEmail);

    if (contactName === "" || contactName.length < 3) {
        document.getElementById('notification').innerHTML = `<p>Input nama tidak valid!</p>`;
        return false; //tidak akan masuk obj

    } else if(!contactEmail.includes('@')){
        document.getElementById('notification').innerHTML = `<p>Input email harus mengandung (@)!</p>`;
        return false;
    }else if (contactNumber.length < 1 || contactNumber.length > 13) {
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
            </tr>`;
    
    if (search == "") {
        tableResult += `<tr><td colspan="5">Silahkan masukkan data terlebih dahulu!</td></tr>`;
    }else{
        //cek dulu ada data yang sama engga, +lower case
        const found = contact.filter(c => c.name.toLowerCase() === search.toLowerCase());

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