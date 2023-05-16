import ContextProvider from "@/context/ContextProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Header from "@/components/client/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Water Notes",
  description: "Make Notes Like Water And Read Like An Anccesstor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main>
          <ContextProvider>{children as ReactNode}</ContextProvider>
        </main>
      </body>
    </html>
  );
}
