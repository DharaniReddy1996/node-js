import { RegularEmployee} from "./RegularEmployee";
import {Consultant} from "./Consultant";
import {EmployeeType} from "./EmployeeType";
import {v4 as uuidv4} from 'uuid';

let regemp1 =  new RegularEmployee(uuidv4(),"dharani","Developer",25000);
console.log(regemp1.displayEmployeeDetails());

let regemp2 =  new Consultant(uuidv4(),"honey","testing",22000,EmployeeType.TESTING)
regemp2.displayEmployeeDetails();

regemp2.createEmployee(uuidv4(),"dharani","Oracel");
regemp2._hourly=34;
regemp2._spec=EmployeeType.DEVELOPER;
regemp2.displayEmployeeDetails(); 
 
