import {injectable, multiInject} from "inversify";

@injectable()
export class DepartmentService {
    public departmentRepository: DepartmentRepository[];

    constructor(@multiInject("DepartmentRepository") departmentRepository: DepartmentRepository[]) {
        this.departmentRepository = departmentRepository;
    }

    public getDepartmentNames(): string[] {
        let departmentList = [];
        this.departmentRepository.forEach(department => {
            departmentList.push(department.getDepartmentName());
        })
        return departmentList;
    }


    public executeAccordingToStrategy(departmentName: string): any[] {

        let repositories = this.departmentRepository.filter(function (departmentRepository: DepartmentRepository) {
            return departmentRepository.canExecute(departmentName);
        });

        if (repositories.length != 1) {
            throw new Error("strategy found in different quantity.")
        }

        return repositories[0].execute();
    }
}