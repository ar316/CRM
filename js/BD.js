

let DB;

export function createDataBase(){
    const db = window.indexedDB.open("crm", 1);


    db.onerror = function (){
        console.log("Error");
    }

    db.onsuccess = function (){
        console.log("base de datos creada correctamente ");
        DB = db.result;
    }

    db.onupgradeneeded = function (e) {
        const database = e.target.result;
        const objetStore = database.createObjectStore("crm",{keypath:'id', autoIncrement:true})
    
        objetStore.createIndex("nombre", "nombre", {unique:false});
        objetStore.createIndex("email", "email", {unique:false});
        objetStore.createIndex("telefono", "telefono", {unique:false});
        objetStore.createIndex("id", "id", {unique:true});

        console.log("base de datos lista y creada");

    
    }

}