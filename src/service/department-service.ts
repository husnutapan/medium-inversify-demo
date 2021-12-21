import {injectable, multiInject} from "inversify";

@injectable()
export class DepartmentService {
    public departmentRepository: DepartmentRepository[];

    constructor(@multiInject("DepartmentRepository") departmentRepository: DepartmentRepository[]) {
        this.departmentRepository = departmentRepository;
    }

    public getDepartmentNames(): string[] {
        let deparmentList = [];
        this.departmentRepository.forEach(department => {
            deparmentList.push(department.getDeparmentName());
        })
        return deparmentList;
    }
}