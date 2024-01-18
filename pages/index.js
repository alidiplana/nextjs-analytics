import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "10px", fontSize: "20px" }}>Landing Page</div>
    </>
  );
}
