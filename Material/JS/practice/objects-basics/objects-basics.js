const person = {
    name: "",
    address: "",
    job: "",
    age: "",
    info: function(){
        return `Hi ${this.name}! Selamat datang di Portal :D`;
    },
};

function submit(){
    //bisa tapi ga direkomendasiin:
    // const name = document.getElementById('name').value;
    // const address = document.getElementById('address').value;
    // const job = document.getElementById('job').value;
    // const age = document.getElementById('age').value;

    // person.name = name
    // person.address = address
    // person.job = job;
    // person.age = age;

    //baiknya gini:
    person.name = document.getElementById('name').value;
    person.address = document.getElementById('address').value;
    person.job = document.getElementById('job').value;
    person.age = document.getElementById('age').value;

    console.table(person);

    //Cek nama diisi atau engga
    if (person.name === "" || person.address === "" || person.job === "" || person.age === "") {
        document.getElementById('caution').innerText = "Isi semua data dulu ya!";
        return;
    }

    document.getElementById('say-hi').innerText = person.info();
}