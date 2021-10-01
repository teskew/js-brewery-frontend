class OrderService {
    constructor(port){
          this.port = port

    }
      getOrders(){
        fetch(this.port + `/orders`)
          .then(response => response.json())
          .then(data => {
            for(const order of data){
                 let o = new Order(order)
                      o.attachToDom()

              }
          })
          .catch()
      }
      createOrders(){
       const orderInfo = {
          order: {
              name: nameValue.value,
              amount: amountValue.value,
              price: priceValue.value,
              company_id: dropDown.value
           }
          }
          const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(orderInfo)
        }

          fetch(this.port + `/orders`, configObject)
          .then(response => response.json())
          .then(data => {
            const o = new Order(data)
            o.attachToDom()
        })
    }
      
}
