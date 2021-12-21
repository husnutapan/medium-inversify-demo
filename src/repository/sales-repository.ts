import {injectable} from "inversify";

@injectable()
export class SalesRepository implements DepartmentRepository {

    getDeparmentName(): string {
        return "Sales";
    }

}