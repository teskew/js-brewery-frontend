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
        <h2 class="name">${this.name}</h2>
        <h2 class="amount">${this.amount}</h2>
        <h2 class="price">${this.price}</h2>
        </div>
        `
      return this.element
    }

     
      attachToDom(){ 
      Order.cont.appendChild(this.render()) 
    }
}