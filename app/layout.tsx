import type { Metadata } from "next";
import { Inter } from "next/font/google";

import cx from "classix";

import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LAB",
  description: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(inter.className, "relative min-h-screen flex flex-col")}
      >
        <NavBar theme="light" />
        <div className="flex flex-auto flex-col justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
