import {injectable} from "inversify";

@injectable()
export class HrRepository implements DepartmentRepository {

    getDepartmentName(): string {
        return "HumanResources";
    }

    canExecute(name: string): boolean {
        return this.getDepartmentName() === name;
    }

    execute(): any[] {
        let hrStuff = [];
        hrStuff.push("hrstaff1")
        hrStuff.push("hrstaff2")
        hrStuff.push("hrstaff3")
        return hrStuff;
    }

}