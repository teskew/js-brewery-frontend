class OrderService {
    constructor(port){
          this.port = port

    }
      getOrders(){
          fetch(this.port + `/orders`)
          .then(response => response.json())
          .then(data => console.log(data))
      }
}