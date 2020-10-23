"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularEmployee = void 0;
var Employee_1 = require("./Employee");
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(employeeId, employeeName, department, salary) {
        var _this = _super.call(this, employeeId, employeeName, department) || this;
        _this.salary = salary;
        _this.salary = salary;
        return _this;
    }
    RegularEmployee.prototype.displayEmployeeDetails = function () {
        console.log(this.employeeId + " " + this.employeeName + " " + this.department + " " + this.salary);
    };
    RegularEmployee.prototype.createEmployee = function (employeeId, employeeName, department) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
        this.salary = this._salary;
    };
    Object.defineProperty(RegularEmployee.prototype, "_salary", {
        get: function () {
            return this.salary;
        },
        set: function (_salary) {
            this.salary = _salary;
        },
        enumerable: false,
        configurable: true
    });
    return RegularEmployee;
}(Employee_1.Employee));
exports.RegularEmployee = RegularEmployee;
