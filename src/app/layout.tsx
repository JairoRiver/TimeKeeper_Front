import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import Footer from "../components/footer"
import NavBar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeKeeper",
  description: "Time record app",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
