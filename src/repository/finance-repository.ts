import {injectable} from "inversify";

@injectable()
export class FinanceRepository implements DepartmentRepository {

    getDepartmentName(): string {
        return "Finance";
    }

    canExecute(name: string): boolean {
        return this.getDepartmentName() === name;
    }

    execute(): any[] {
        let financeStuff = [];
        financeStuff.push("financestaff1")
        financeStuff.push("financestaff2")
        financeStuff.push("financestaff3")
        return financeStuff;
    }

}