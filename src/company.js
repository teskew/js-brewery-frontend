
class Company{   
 constructor({name, brewery_type, city, phone,  website_url, id, orders}){

this.name = name
this.brewery_type = brewery_type
this.city = city
this.phone = phone
this.website_url = website_url
this.id = id
this.orders = orders
}

addToDropDown(){
    const option = document.createElement('option');
    option.value = this.id;
    option.innerText = this.name;
     dropDown.appendChild(option)
   
}
}