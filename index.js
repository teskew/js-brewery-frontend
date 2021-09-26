const port = `http://localhost:3000`;
const orderCall = new OrderService(port);
const form = document.getElementById("order-form");
const dropDown = document.getElementById("company_dropdown");
orderCall.getOrders('js-brewewry')
form.addEventListener('submit', handleSubmit)


function handleSubmit(e){
    e.preventDefult();
    Order.call.creatOrders()
    debugger
}
