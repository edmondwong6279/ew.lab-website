import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import cx from "classix";

import "@/styles/globals.css";
import styles from "./root.module.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

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
      <body className={cx(inter.className, styles.body)}>
        <NavBar theme="light" />
        <div className={styles.outerContainer}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
