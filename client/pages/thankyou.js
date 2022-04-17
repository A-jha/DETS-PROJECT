import Link from "next/link";
import React from "react";
import Layout from "../components/layout/Layout";
const Thanyou = ({ from }) => {
  return (
    <Layout>
      <div>
        <div>
          <h2>Thank You For Your {from}.</h2>
          <Link href={"/"}>Back To Main Page</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Thanyou;
