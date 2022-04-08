let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let quantite = document.getElementById("quantite");
let submit = document.getElementById("submit");
let dataPro;
if (localStorage.products != null) {
  dataPro = JSON.parse(localStorage.products);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    description: description.value,
    quantite: quantite.value,
  };
  dataPro.push(newPro);
  localStorage.setItem("products", JSON.stringify(dataPro));
  //console.log(dataPro);
  clearData();
  showData();
};

function clearData() {
  title.value = "";
  price.value = "";
  description.value = "";
  quantite.value = "";
}

function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
                 <tr>
                      <td >${i}</td>
                      <td>${dataPro[i].title}</td>
                      <td>${dataPro[i].price}</td>
                      <td>${dataPro[i].description}</td>
                      <td>${dataPro[i].quantite}</td>
                      <td><button  type="button" class="  btn btn-warning waves-light">Edit</button></td>
                      <td><button onclick="deleteData(${i})"  type="button" class="  btn btn-danger waves-light">Delete</button></td>
                    </tr>`;
  }

  document.getElementById("tbody").innerHTML = table;
}

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.products = JSON.stringify(dataPro);
  showData();
}

showData();
