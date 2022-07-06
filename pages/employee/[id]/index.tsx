import React from "react";
import { Context } from "vm";

const singleEmployee = ({ employee }: any) => {
  return <div>employee {employee.id}</div>;
};

export const getStaticProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.params.id}`
  );
  const employee = await res.json();
  console.log(
    "🚀 ~ file: index.tsx ~ line 11 ~ getServerSideProps ~ employee",
    employee
  );
  return {
    props: {
      employee,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const employees = await res.json();
  const paths = employees.map((employee: any) => ({
    params: { id: employee.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default singleEmployee;
