import Script from "next/script";

export default function Navbar() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <div style={{ display: "flex", gap: "10px" }}>
        <a href="/home">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/product">Product</a>
      </div>
    </>
  );
}
