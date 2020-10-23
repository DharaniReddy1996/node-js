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
exports.Consultant = void 0;
var Employee_1 = require("./Employee");
var Consultant = /** @class */ (function (_super) {
    __extends(Consultant, _super);
    function Consultant(employeeId, employeeName, department, hourly_Amount, specalization) {
        var _this = _super.call(this, employeeId, employeeName, department) || this;
        _this.hourly_Amount = hourly_Amount;
        _this.specalization = specalization;
        _this.hourly_Amount = hourly_Amount;
        _this.specalization = specalization;
        return _this;
    }
    Consultant.prototype.displayEmployeeDetails = function () {
        console.log(this.employeeId + " " + this.employeeName + " " + this.department + " " + this.hourly_Amount + " " + this.specalization);
    };
    Consultant.prototype.createEmployee = function (employeeId, employeeName, department) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
        this.hourly_Amount = this._hourly;
        this.specalization = this._spec;
    };
    Object.defineProperty(Consultant.prototype, "_hourly", {
        get: function () {
            return this.hourly_Amount;
        },
        set: function (_hourly) {
            this.hourly_Amount = _hourly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consultant.prototype, "_spec", {
        get: function () {
            return this.specalization;
        },
        set: function (spec) {
            this.specalization = this._spec;
        },
        enumerable: false,
        configurable: true
    });
    return Consultant;
}(Employee_1.Employee));
exports.Consultant = Consultant;
