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
        //debugger
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
    updateOrder(order){
      //debugger
      const {name, amount, price, id} = order
      const orderInfo = {
          name, 
          amount,
          price
      }

      const configObject = {
          method: 'PATCH',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(orderInfo)
      }
      // debugger
      fetch(`${this.port}/orders/${id}`, configObject)
      .then( order.render() )
      .then(data => {
         // const o = new Order(data)
          order.render()
      })

  }

  deleteOrder(e){
      // debugger
      const id = e.target.dataset.id
      e.target.parentElement.remove()
      // fetch(`${this.port}/orders/${id}`, {method: 'DELETE'})
      // .then(response => response.json())
      // .then(json => alert(json.message))
  }

 
}
