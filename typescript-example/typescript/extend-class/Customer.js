"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(customerId, firstName, lastName, email) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    //overridden method
    Customer.prototype.displayDetails = function () {
        console.log(this.customerId + " " + this.firstName + "  " + this.lastName + "  " + this.email);
    };
    return Customer;
}());
exports.Customer = Customer;
/*let temp:any=uuidv4();
let arr:any[]=temp.split('-')
let myCustomer=new Customer(arr[4],'John','Doe','abcd');
myCustomer.displayDetails();*/ 
