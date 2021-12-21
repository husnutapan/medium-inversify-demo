import {injectable} from "inversify";

@injectable()
export class HrRepository implements DepartmentRepository {

    getDeparmentName(): string {
        return "Human Resources";
    }

}