// @ts-nocheck
const fs = require("fs");

let input = document.getElementById("input");
let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let content = document.getElementById("content");

boton.addEventListener("click", ()=>{
    let file_path = input.value;
    fs.readFile(file_path, 'UTF-8', (err, value)=>{
        if(err) throw err;
        content.innerHTML = value;
    });
});
boton2.addEventListener("click", ()=>{
    let file_path = input.value;
    fs.readFile(file_path, 'UTF-8', (err, value)=>{
        if(err) throw err;
        content.innerHTML = value.split('');
    });
});
boton3.addEventListener("click", ()=>{
    let file_path = input.value;
    fs.readFile(file_path, 'UTF-8', (err, value)=>{
        if(err) throw err;
        content.innerHTML = value.split(' ');
    });
});