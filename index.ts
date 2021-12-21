import "reflect-metadata";
import {container} from "./ioc";
import {EmployeeService} from "./src/service/employee-service";
import {DepartmentService} from "./src/service/department-service";

const employeeService = container.get<EmployeeService>(EmployeeService);

const departmentService = container.get<DepartmentService>(DepartmentService);

console.log(employeeService.getEmployees());

console.log(departmentService.getDepartmentNames());