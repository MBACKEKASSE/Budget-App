
let expenses =[];
 
const tbleExpense = document.querySelector('.tble-expense')
const tblExpenseBody = document.createElement("tblExpenseBody")

function createTableExpense() {
    for (let element = 0; element < expenses.length; element++) {
      console.log({ element, contact: expenses[element] });
      const row = document.createElement("tr");
  
      const cell1 = document.createElement("td");
      cell1.textContent = expenses[element].titre;
      row.appendChild(cell1);
  
      const cell2 = document.createElement("td");
      cell2.innerText = expenses[element].montant;
      row.appendChild(cell2);
  
      const cell3 = document.createElement("td");
      cell3.innerHTML = <button class="btn btn-danger">Delete</button>;
      row.appendChild(cell3);
  
      tblExpenseBody.appendChild(row);
    }
    tbleExpense.appendChild(tblExpenseBody);
  }
  createTableExpense()

// const  title = querySelector("#title");
// const amount = querySelector("#amount");
// const keyButton = querySelector("#keyButton");

// modal
let modal = document.getElementById("contactModal")
let modalButton = document.getElementById("addModalButton")
let close = document.querySelector(".close")
 
modalButton.onclick = function () {
     modal.style.display="block"
    console.log('cva')

}
close.onclick = function () {
    modal.style.display="none"
};
let modale = document.getElementById("incomeModal")
let modaleButton = document.getElementById("addModaleButton")
let closee = document.querySelector(".closee")
 
modaleButton.onclick = function () {
     modale.style.display="block"
    console.log('cva')

}
closee.onclick = function () {
    modale.style.display="none"
}

let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let myInput = document.getElementById('title');
    // let myIput = document.getElementById('amount');

    if (myInput.value.trim() == "") {
        e.preventDefault();
    }

})

let myform = document.getElementById('myform')

myform.addEventListener('submit', function (e) {
    e.preventDefault(myform);
})

