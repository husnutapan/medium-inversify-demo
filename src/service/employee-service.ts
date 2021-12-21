import {inject, injectable} from "inversify";
import {EmployeeRepository} from "../repository/employee-repository";
import {Employee} from "../model/employee";

@injectable()
export class EmployeeService {
    public employeeRepository: EmployeeRepository;

    constructor(@inject(EmployeeRepository) employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public getEmployees(): Employee[] {
        return this.employeeRepository.getEmployees();
    }
}