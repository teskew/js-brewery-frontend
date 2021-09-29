class CompanyService{
    constructor(port){
        this.port = port
    }
    
    getCompanies(){
        fetch(`${this.port}/companies`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                 
                const c = new Company(element)
                c.addToDropDown()
               // debugger
            })
        })
    }
}