import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navigation";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-XXXXX-X";
ReactGA.initialize(TRACKING_ID);

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
