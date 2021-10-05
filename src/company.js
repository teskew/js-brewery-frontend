
class Company{ 
    // static all = []
    // static companyContainer = document.getElementById(com-container)

 constructor({name, brewery_type, city, phone, website_url, id, orders}){

this.name = name
this.brewery_type = brewery_type
this.city = city
this.phone = phone
this.website_url = website_url
this.id = id
this.orders = orders
// this.active = false
//  this.element = document.createElement('button')
//  Company.all.push(this)
 }
//  render(){
//     this.element.innerText = this.name 
//     this.element.id = `company-${this.id}`
//     return this.element
// }
//  addToDom(){
//     Company.companyContainer.append(this.render())
//     this.addListeners()
// }

// addListeners(){
//     this.element.addEventListener('click', this.setActiveCompany)
// }

// setActiveCompany = (e) => {
//     //event listener set campany
//     //add filter method 
//     //remove the current items replace with new list of items
//     let filteredCompany
//     // let body = document.querySelector('body'); 
//     // body.style.backgroundColor = "blue"
//     Company.all.forEach(c => {

//         if(c.element === this.element && !this.active){
//             // debugger
//             c.element.classList.add('activated')
//             c.active = true
//             filteredCategory = c

        
//         }else{
//             c.element.classList.remove('activated')
//             c.active = false
//         }
//         Order.filteredByCompany(filteredCompany)  
//     }) 
 //}


addToDropDown(){
    const option = document.createElement('option');
    option.value = this.id;
    option.innerText = this.name;
    dropDown.appendChild(option)
   
}
}