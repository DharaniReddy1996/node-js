import { v4 as uuidv4 } from 'uuid';

class ToDo{
 toDoId:any;
 toDoName:string;
 isCompleted:boolean;

 constructor(toDo:any,toDoname:string,isCompleted:boolean){
     this.toDoId=toDo;
     this.toDoName=toDoname;
     this.isCompleted=isCompleted;

 }
 displayList(){
     console.log(`${this.toDoId} ${this.toDoName} ${this.isCompleted}`);
 }
}
 let temp:any= uuidv4();
 let arr:any[]=temp.split('-');
 let myToDo=new ToDo(arr[4],'mithra',true);
 myToDo.displayList();

