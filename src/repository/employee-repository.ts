import {injectable} from "inversify";
import {Employee} from "../model/employee";

@injectable()
export class EmployeeRepository {

    public employee: Employee[] = [
        {id: 1, name: "employee1", age: 30},
        {id: 2, name: "employee2", age: 23},
        {id: 3, name: "employee3", age: 25},
        {id: 4, name: "employee4", age: 24}
    ];

    constructor() {
    }

    public getEmployees(): Employee[] {
        return this.employee;
    }
}
