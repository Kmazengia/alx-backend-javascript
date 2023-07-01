export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      let departmentName = departments[currentDepartmentIndex];
      let employees = report.allEmployees[departmentName];
      let employeeName = employees[currentEmployeeIndex];

      if (currentEmployeeIndex >= employees.length - 1) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      } else {
        currentEmployeeIndex++;
      }

      return {
        value: employeeName,
        done: false
      };
    }
  };
}
