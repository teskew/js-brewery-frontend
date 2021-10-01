class CompanyService{
    constructor(port){
        this.port = port
    }
    
    getCompanies(){
        fetch(`${this.port}/companies`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                 //debugger
                const c = new Company(element)
             
                 c.addToDropDown()
              
            })
        })

    }
}