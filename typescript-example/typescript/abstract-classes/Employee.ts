export abstract class Employee{
    protected employeeId:any;
    protected employeeName:string;
    protected department:string;

    constructor(emplooyeeId:any,employeeName:string,department:string){
        this.employeeId=emplooyeeId;
        this,employeeName=employeeName;
        this.department=department;
    }

abstract displayEmployeeDetails()
abstract createEmployee(employeeId:any,employeeName:string,department:string);
}