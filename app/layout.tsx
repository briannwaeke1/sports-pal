import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports Pal",
  description: "Sports Wagering Tool",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "joy" }}>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
