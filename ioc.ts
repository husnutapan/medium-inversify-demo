import {Container} from "inversify";
import {EmployeeRepository} from "./src/repository/employee-repository";
import {EmployeeService} from "./src/service/employee-service";
import {FinanceRepository} from "./src/repository/finance-repository";
import {HrRepository} from "./src/repository/hr-repository";
import {DepartmentService} from "./src/service/department-service";
import {SalesRepository} from "./src/repository/sales-repository";

export const container = new Container();
container.bind<EmployeeRepository>(EmployeeRepository).toSelf().inSingletonScope();
container.bind<EmployeeService>(EmployeeService).toSelf().inSingletonScope();

container.bind<DepartmentService>(DepartmentService).toSelf().inSingletonScope();
container.bind<DepartmentRepository>("DepartmentRepository").to(FinanceRepository).inSingletonScope();
container.bind<DepartmentRepository>("DepartmentRepository").to(HrRepository).inSingletonScope();
container.bind<DepartmentRepository>("DepartmentRepository").to(SalesRepository).inSingletonScope();