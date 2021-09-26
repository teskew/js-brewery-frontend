class OrderService {
    constructor(port){
          this.port = port

    }
      getOrders(){
          fetch(this.port + `/orders`)
          .then(response => response.json())
          .then(data => {
              for(const order of data){
                 let c = new Order(order)
                 c.attachToDom()

              }
          })
          .catch()
      }
      createOrders(){
       const orderInfo = {
          order: {
              name: nameValue.value,
              amount: amountValue.value,
              price: priceValue.volue,
              company_id: company_id.value
           }
          }
      fetch (this.port + `/orders, `)
      .then(response => response.jason())
      .then(data => {
        const c = new Order(data)
        c.attachToDom()
      })
    }
      
}
