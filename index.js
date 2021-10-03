const port = `http://localhost:3000`;
const orderCall = new OrderService(port);
const companyCall = new CompanyService(port);

const form = document.getElementById("order-form");
const dropDown = document.getElementById("company-dropdown");

const nameValue = document.getElementById('order-name');
const amountValue = document.getElementById('order-amount');
const priceValue = document.getElementById('order-price');

orderCall.getOrders()
companyCall.getCompanies()
form.addEventListener('submit', handleSubmit)


function handleSubmit(e){
    e.preventDefault();
    orderCall.createOrders()
    //debugger
   
}
