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
}