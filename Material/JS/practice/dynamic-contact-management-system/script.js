let contact = [];
let counter = 0;

function addContact(){
    const contactName = document.getElementById('form-name').value;
    const contactEmail = document.getElementById('form-email').value;
    const contactNumber = document.getElementById('form-telephone').value;

    //kirim data sebagai parameter, agar variable inputan dapat diakses di function validateInput();
    if (!validateInput(contactName, contactEmail, contactNumber)) {
        return;
    }
    
    counter++;
    const contactObject = {
        id: counter,
        name: contactName,
        email: contactEmail,
        telepon: contactNumber,
        createAt: new Date().toISOString()
    };
    contact.push(contactObject);

    console.log(contactObject);
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