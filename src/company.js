
class Company{
    static all = [];
    static companyContainer = document.getElementById('com-container');

    constructor({name, id, orders}) {
        // debugger
        this.name = name   
        this.id = id
        this.orders = orders
        
        this.active = false

        this.element = document.createElement('button')
        Company.all.push(this)
    }

    render() {
        this.element.innerText = this.name       
        this.element.id =  `company-${this.id}`
        return this.element
    }

    addToDom(){
        Company.companyContainer.append(this.render())
        this.addListeners()
    }

    addListeners(){
        this.element.addEventListener('click', this.setActiveCompany)
    }

    setActiveCompany= (e) => {
        //event listener set Company
        //add filter method 
        //remove the current orders replace with new list of orders
        
        let filteredCompany
        // let body = document.querySelector('body');
        // body.style.backgroundColor = "pink" 
        Company.all.forEach(c => {
      
            if(c.element === this.element && !this.active){
                // debugger
                c.element.classList.add('activated')
                c.active = true
                filteredCompany= c          
            }else{
                c.element.classList.remove('activated')   
                c.active = false
            }
            Order.filteredByCompany(filteredCompany)  
        })
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}