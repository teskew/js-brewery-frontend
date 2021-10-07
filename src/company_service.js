class CompanyService{
    constructor(port){
        this.port = port
    }
    
    getCompanies(){
        fetch(`${this.port}/companies`)
        .then(response => response.json())
        .then(json => {
            //debugger
            json["data"].forEach(element => {
                // json.forEach(element => {
                 const c = new Company({id: element.id, ...element.attributes})
               // const c = new Company(element)
                //debugger
                c.addToDom()
                c.addToDropDown()
               
              
            })
        })

    }
}