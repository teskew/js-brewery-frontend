class CompanyService{
         constructor(port){
         this.port = port
    }
    
    getCompanies(){
        fetch(`${this.port}/companies`)
        .then(response => response.json())
        .then(json => {
          
            for(const company of json.data)  {
             let c = new Company({id: company.id, ...company.attributes})
                     c.addToDom()
                    c.addToDropDown()
               
              
            }
        })

    }
}