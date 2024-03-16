import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/app/_components/header/header";
import TrpcProvider from "@/trpc/trpc-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports Pal",
  description: "Sports Wagering Tool",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeRegistry options={{ key: "joy" }}>
            <TrpcProvider>
              <Header />
              {children}
            </TrpcProvider>
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
