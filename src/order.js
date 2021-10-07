class Order{
    static all = [];
    static ordersContainer = document.getElementById("orders-container")
    constructor({name, id, amount, price, company_id, company }){
       this.name = name
       this.id = id
       this.amount = amount
       this.price = price
       this.company_id = company_id
       this.company = company
       this.element = document.createElement('li');
       this.element.dataset['id'] = id;
       this.element.id = `order-${id}`;
       this.element.addEventListener('click', this.handleClick);
       Order.all.push(this)
       //debugger
    }
    static filteredByCompany(filteredCompany){
      if(filteredCompany){
      for(const i of Order.all){
          if(i.companyId === parseInt(filteredCompany.id)){
              i.element.style.display = ""
          }else{
             i.element.style.display = "none" 
          }
      }
  }else{
      for(const i of Order.all){
          i.element.style.display = ""
      }
  }
    }
      // debugger
    render(){
         this.element.innerHTML = `
        
        <div data-id="${this.id}">
        Name: <span class="name">${this.name} </span>
        Amount: <span class="amount">${this.amount} </span>
        Price: $<span class="price">${this.price} </span>
        </div>
        <button class="edit" data-id=${this.id}>Edit</button>
        <button class="delete" data-id=${this.id}>Delete</button>
        
        `
      return this.element
    }

    // renderOrder(){
    //   Order.cont.appendChild(this.render)
    // }
    handleClick = (e) => {
      if(e.target.innerText === "Edit Order"){
          console.log(e.target)
           e.target.innerText = "Save Order"
           this.createEditForm()
           // debugger
      }else if(e.target.innerText === "Delete"){
           console.log(e.target)
           orderCall.deleteOrder(e)
      }else if(e.target.innerText === "Save Order"){
           console.log("save works")
           e.target.innerText = "Edit Order"
           this.updatedOrderInfo()
      }
  }
     
  createEditForm(){
      
    const div = this.element.querySelector('div');
   for(const element of div.children){
       let inputValue = element.innerText;
       let name = element.classList[0];
       element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}"/>`
    }
   // debugger
}

updatedOrderInfo(){
  this.name = this.element.querySelector(".edit-name").value;
  this.amount = this.element.querySelector(".edit-amount").value;
  this.price = this.element.querySelector(".edit-price").value;
  orderCall.updateOrder(this)
 //debugger
}

attachToDom(){
   Order.ordersContainer.appendChild(this.render())
 }
    }
   


