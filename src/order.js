class Order{
    static all = [];
    static cont = document.getElementById("orders-cont")
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
    render(){
         this.element.innerHTML = `
        
        <div data-id="${this.id}">
       Name: <span class="name">${this.name}</span>
       Amount: <span class="amount">${this.amount}</span>
        Price: $<span class="price">${this.price}</span>
        </div>
        <button class="edit" data-id=${this.id}>Edit Order</button>
        <button class="delete" data-id=${this.id}>X</button>
        
        `
      return this.element
    }

    createEditForm(){
      
       const div = this.element.querySelector('div');
      for(const element of div.children){
          let inputValue = element.innerText;
          let name = element.classList[0];
          element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
       }
      // debugger
  }

  updatedItemInfo(){
     this.name = this.element.querySelector(".edit-name").value;
     this.amount = this.element.querySelector(".edit-amount").value;
     this.price = this.element.querySelector(".edit-price").value;
     orderCall.updateOrder(this)
    //debugger
}

    handleClick = (e) => {
      if(e.target.innerText === "Edit Order"){
          console.log(e.target)
           e.target.innerText = "Save Order"
           this.createEditForm()
           // debugger
      }else if(e.target.innerText === "X"){
           console.log(e.target)
          // orderCall.deleteOrder(e)
      }else if(e.target.innerText === "Save Order"){
           console.log("save works")
           e.target.innerText = "Edit Order"
           this.updatedItemInfo()
      }
  }

  

  
attachToDom(){
   Order.cont.appendChild(this.render())
 }
    }
   


