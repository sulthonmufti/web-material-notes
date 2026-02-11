//mengambil dan menampilkan array
const array = [];
function inputArray(){
    // array[0] = document.getElementById('index-0').value;
    // array[1] = document.getElementById('index-1').value;
    // array[2] = document.getElementById('index-2').value;

    array.length = 0;

    const index0 = document.getElementById('index-0').value;
    const index1 = document.getElementById('index-1').value;
    const index2 = document.getElementById('index-2').value;

    if (index0 !== "") array.push(index0);
    if (index1 !== "") array.push(index1);
    if (index2 !== "") array.push(index2);

    console.table(array);

    document.getElementById('show-array').innerHTML = `<p>Panjang array: ${array.length}</p><p>Isi array adalah : {${array}}</p>`;
}

//mengganti data
function addArray(){
    const indexTambah = document.getElementById('add-index').value;
    const dataTambah = document.getElementById('data-index').value;
    
    if (indexTambah === "" || dataTambah === "") {
        document.getElementById("caution").innerText = `Silahkan masukkan data terlebih dahulu!`;
    } else if (indexTambah > array.length) {
        document.getElementById("caution").innerText = `Data index tidak valid, index maksimum saat ini adalah: ${array.length}`;
        
        console.table(array);
    }else if (indexTambah === array.length + 1) {
        array[indexTambah + 1] = dataTambah;
        document.getElementById('notification').innerHTML = `<p>Data berhasil ditambahkan!</p>`;
        document.getElementById('show').innerHTML = `<p>Panjang array: ${array.length}</p><p>Isi array adalah : {${array}}</p>`;
        
        console.table(array);
    }else{
        array[indexTambah] = dataTambah;
        document.getElementById('notification').innerHTML = `<p>Data index ke-${indexTambah} berhasil ubah!</p>`;
        document.getElementById('show').innerHTML = `<p>Panjang array: ${array.length}</p><p>Isi array adalah : {${array}}</p>`;

        console.table(array);
    }
}

//delete data array
function deleteArray(){
    const deleteArray = document.getElementById('delete-index').value;

    //hapus data array, tapi index nya masih ada dengan data kosong, jadi array.length nya tidak berkurang
    // if(deleteArray !== "") delete(array[deleteArray]);

    //hapus data dan index array, jadi index setelahnya akan maju ke depan dan array.length akan berkurang
    if(deleteArray !== "") array.splice(deleteArray, 1);

    document.getElementById('notification-delete').innerHTML = `<p>Data berhasil dihapus!</p>`;
    document.getElementById('show-delete').innerHTML = `<p>Panjang array: ${array.length}</p><p>Isi array adalah : {${array}}</p>`;

    console.table(array);
}
