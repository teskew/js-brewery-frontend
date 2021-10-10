class Order{
    static all = [];
    static ordersContainer= document.getElementById('orders-container')
    constructor({name, id, amount, price, company_id }){
       this.name = name
       this.id = id
       this.amount = amount
       this.price = price
       this.companyId = company_id

       this.element = document.createElement('li');
       this.element.dataset['id'] = id;
       this.element.id = `order-${id}`;
       this.element.addEventListener('click', this.handleClick);
       Order.all.push(this)
       //debugger
    }
    static filteredByCompany(filteredCompany){
      if(filteredCompany) {
          for(const o of Order.all){
              if(o.companyId === parseInt(filteredCompany.id)){
                  o.element.style.display =""               
              }else {
                  o.element.style.display = "none"
              }
          }
      }else {
          for(const o of Order.all){
              o.element.style.display = ""
          }
      }
    }
    render() {
      this.element.innerHTML = `
      <div data-id="${this.id}">
      <h2 class="name">${this.name}</h2>
      Amount: <span class="amount">${this.amount}</span>
      Price: $<span class="price">${this.price}</span>
      </div>
      <button class="edit" data-id=${this.id}>Edit Order</button>
      <button class="delete" data-id=${this.id}>X</button>

      `
      return this.element
  }
   

    // renderCompany(){
    //   Company.container.appendChild(this.render())
    //   form.reset()
    //   li.addEventListener('click', handleClick)
    //    }
    updatedOrderInfo(){
      this.name = this.element.querySelector(".edit-name").value;
      this.amount = this.element.querySelector(".edit-amount").value;
      this.price = this.element.querySelector(".edit-price").value;
      orderCall.updateOrder(this)
     //debugger
    }
   
    handleClick = e => {
      if(e.target.innerText === "Edit Order") {
          console.log(e.target)
          e.target.innerText = "Save Order"
          this.createEditForm()
      }else if(e.target.innerText === "X") {
          console.log(e.target)
          orderCall.deleteOrder(e)
      }else if(e.target.innerText === "Save Order") {
          console.log('Save works')
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
  }
  
  // renderOrder(){
  //   Order.cont.appendChild(this.render)
  // }

  attachToDom(){
     Order.ordersContainer.appendChild(this.render())
  }
}
   


