import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BrailleProvider } from './components/BrailleContext';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Header } from "@components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Braille",
  description: "Application to learn Braille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <BrailleProvider>
        <body className={`${inter.className}`}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-100">{children}</main>
            <footer className="bg-gray-100 text-black-500 py-4 text-center">
              <p>&copy; 2024 Learn Braille. All rights reserved.</p>
            </footer>
          </div>
        </body>
      </BrailleProvider>
    </html>
  );
}
