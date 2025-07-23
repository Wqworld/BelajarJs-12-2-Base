let nama = "yassir";
const date = new Date().getFullYear()
console.log(nama);
nama = "waqqir";
console.log(nama, date);
console.log();

function printCompanyInfo() {
  const name = "Dicoding"; 
  const legal = "LLC";

  console.log("Company name:", name);
  console.log("Legal type:", legal);
}

function printEmployeeInfo() {
  const name = "John"; 
  const division = "IT";

  console.log("Employee name:", name);
  console.log("Division:", division);
}

printCompanyInfo();
printEmployeeInfo();