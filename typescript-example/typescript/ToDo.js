"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var ToDo = /** @class */ (function () {
    function ToDo(toDo, toDoname, isCompleted) {
        this.toDoId = toDo;
        this.toDoName = toDoname;
        this.isCompleted = isCompleted;
    }
    ToDo.prototype.displayList = function () {
        console.log(this.toDoId + " " + this.toDoName + " " + this.isCompleted);
    };
    return ToDo;
}());
var temp = uuid_1.v4();
var arr = temp.split('-');
var myToDo = new ToDo(arr[4], 'mithra', true);
myToDo.displayList();
