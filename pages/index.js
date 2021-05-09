import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import Section from "../components/section/section";
import { useRouter } from "next/router";

export default function Home({ data, page }) {
  const router = useRouter();
  return (
    <>
      <Layout title={"Home"}>
        <Section characters={data} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
