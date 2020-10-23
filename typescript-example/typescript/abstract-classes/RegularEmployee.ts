import {v4 as uuidv4} from 'uuid';
import { Employee } from "./Employee";

export class RegularEmployee extends Employee
{
    displayEmployeeDetails() {
        console.log(`${this.employeeId} ${this.employeeName} ${this.department} ${this.salary}`)
    }
    createEmployee(employeeId: any, employeeName: string, department: string) {
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.department=department;
        this.salary=this._salary;
    }
    
    constructor(employeeId:any,employeeName:string,department:string,private salary:number){
        super(employeeId,employeeName,department);
        this.salary=salary;
    }
    get _salary(){
        return this.salary;
    }
    set _salary(_salary:number){
        this.salary=_salary;
    }

}