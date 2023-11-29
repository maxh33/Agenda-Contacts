const form= document.getElementById('name');
const name = [];
const  tell= [];


let line = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    insertNumber();
    });

function addLine(){
    const inputName = document.getElementById('name');
    const inputTell = document.getElementById('ContactNumber');

    if (inputName.includes(inputName.value)) {
        alert(`Contact Name ${inputName.value} Already inserted`);
    } else {

    inputName.push(inputName.value);
    inputTell.push(parseFloat(inputTell.value));

    let line = '<tr>';
    line += `<td>${inputName.value}</td>`;
    line += `<td>${inputTell.value}</td>`;
        line += '</tr>';

    line += line;
    }

    inputName.value = '';
    inputTell.value = '';
}

function updateTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = line;
}