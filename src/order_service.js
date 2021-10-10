class OrderService {
          constructor(port){
          this.port = port
    }

      getOrders(){
           fetch(this.port + `/orders`)
          .then(response => response.json())
          .then(json => {
            for(const order of json.data) {
                let o = new Order({id: order.id, ...order.attributes})
                //debugger
                 o.attachToDom()

              }
          })   
      }

    createOrders(){
       const orderInfo = {
          order: {
              name: nameValue.value,
              amount: amountValue.value,
              price: priceValue.value,
              company_id: dropDown.value,
              company_name: comNameValue.value
              
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
        .then(json => {
           let o = new Order({id: json.data.id, ...json.data.attributes})
           const findCom = Company.all.find(c => parseInt(c.id) === o.companyId)
        
        if(!findCom) {
            const comObj = new Company({
                 id: json.data.attributes.company_id, 
                 name: json.data.attributes.company_name        
               
            })
              comObj.addToDom()
              comObj.addToDropDown()
            }
            o.attachToDom()
        })
    }

    updateOrder(order){
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
      fetch(`${this.port}/orders/${id}`, configObject)
      .then( order.render() )

       }

  deleteOrder(e){
      const id = e.target.dataset.id
      e.target.parentElement.remove()
      fetch(`${this.port}/orders/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(json => alert(json.message))
  }

}

