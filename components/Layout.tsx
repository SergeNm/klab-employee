import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }: any) => {
  return (
    <>
    <Nav />
     <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      Layout
    </div>
    </>
   
  );
};

export default Layout;
