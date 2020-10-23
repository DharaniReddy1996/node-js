import { v4 as uuidv4 } from 'uuid';
export class Customer
{
    //properties
    //private-->only the class
    //protected---> same class as well as the derived class
    private customerId:any
    private  firstName: string;
    private  lastName: string;
    private email: string;
    protected rank:String


    constructor(customerId: any ,firstName: string, lastName: string, email: string) {
        this.customerId=customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }
    //overridden method
    displayDetails()
    {
        console.log(`${this.customerId} ${this.firstName}  ${this.lastName}  ${this.email}`);
    }
}
/*let temp:any=uuidv4();
let arr:any[]=temp.split('-')
let myCustomer=new Customer(arr[4],'John','Doe','abcd');
myCustomer.displayDetails();*/