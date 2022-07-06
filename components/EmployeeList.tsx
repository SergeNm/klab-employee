import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees }: any) => {
  return (
    <div>
      <h1>Employee List</h1>
      {employees.map((employee: any) => {
        return (
          <div key={employee.id}>
            <EmployeeItem employee={employee} />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
