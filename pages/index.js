import Head from "next/head";
import Navbar from "../components/navigation";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: "10px", fontSize: "20px" }}>
        Landing Page after GA
      </div>
    </>
  );
}
