
import { Employee } from "./Employee";
import {EmployeeType} from './EmployeeType';

export class Consultant extends Employee
{
    displayEmployeeDetails() {
        console.log(`${this.employeeId} ${this.employeeName} ${this.department} ${this.hourly_Amount} ${this.specalization}`)
    }
    createEmployee(employeeId: any, employeeName: string, department: string) {
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.department=department;
        this.hourly_Amount=this._hourly;
        this.specalization=this._spec;
    }
    
    constructor(employeeId:any,employeeName:string,department:string,private hourly_Amount:number,private specalization:EmployeeType){
        super(employeeId,employeeName,department);
        this.hourly_Amount=hourly_Amount;
        this.specalization=specalization;
    }
   
    get _hourly(){
        return this.hourly_Amount;
    }
    set _hourly(_hourly:number){
        this.hourly_Amount=_hourly
    }
    get _spec(){
        return this.specalization;
    }
    set _spec(spec:number){
        this.specalization=this._spec;
    }

}