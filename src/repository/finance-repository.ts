import {injectable} from "inversify";

@injectable()
export class FinanceRepository implements DepartmentRepository {

    getDeparmentName(): string {
        return "Finance";
    }

}