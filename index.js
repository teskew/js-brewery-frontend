const port = `http://localhost:3000`;
const orderCall = new OrderService(port);
const companyCall = new CompanyService(port);
const comNameValue = document.getElementById("company-name")
const dropDown = document.getElementById("company-dropDown");
 
const ul = document.getElementById('order-list');
const form = document.getElementById("order-form");
 //const companyInput = document.getElementById('company-id')

const nameValue = document.getElementById('order-name');
const amountValue = document.getElementById('order-amount');
const priceValue = document.getElementById('order-price');


//const companyValue = document.getElementById("company-name")
orderCall.getOrders()
companyCall.getCompanies()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    orderCall.createOrders()
    e.target.reset();

   
}
