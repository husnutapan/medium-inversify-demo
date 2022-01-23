import {injectable} from "inversify";

@injectable()
export class SalesRepository implements DepartmentRepository {

    getDepartmentName(): string {
        return "Sales";
    }

    canExecute(name: string): boolean {
        return this.getDepartmentName() === name;
    }

    execute(): any[] {
        let salesStuff = [];
        salesStuff.push("salesstaff1")
        salesStuff.push("salesstaff2")
        salesStuff.push("salesstaff3")
        return salesStuff;
    }

}