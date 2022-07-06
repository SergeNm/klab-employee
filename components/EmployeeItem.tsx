import Link from "next/link";
import React from "react";

const EmployeeItem = ({ employee }: any) => {
  return (
    <div>
      <Link href="/employee/[id]" as={`/employee/${employee.id}`}>
        <a>
          <h3>{employee.name}</h3>
        </a>
      </Link>
    </div>
  );
};

export default EmployeeItem;
