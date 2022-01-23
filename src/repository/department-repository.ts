interface DepartmentRepository {
    getDepartmentName(): string;

    canExecute(departmentName: string): boolean;

    execute(): any[];
}