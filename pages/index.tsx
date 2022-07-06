import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EmployeeList from "../components/EmployeeList";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ employees }: any) => {
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ posts", employees);
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
      </Head>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const employees = await res.json();
  return {
    props: {
      employees,
    },
  };
};
