import { localFont } from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "GrubTurbo",
  description:
    "Food application that will help you pick your next meal in turbo time",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* funnel font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Montserrat&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* montserrat font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Montserrat&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`antialiased animated-gradient-bg ${montserrat.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
