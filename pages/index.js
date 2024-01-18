import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navigation";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-XXXXX-X";

export default function Home() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SJZ6E6TZD7"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-SJZ6E6TZD7');
      </script>
      <Navbar />

      <div style={{ marginTop: "10px", fontSize: "20px" }}>
        Landing Page after GA
      </div>
    </>
  );
}
