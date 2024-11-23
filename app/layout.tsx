import type { Metadata } from "next";
import "./globals.css";
import { inter_reg } from "./fonts";
import Sidebar from "./components/nav/Sidebar";
import Header from "./components/nav/Header";
import { SessionProvider } from "next-auth/react";

const items = [
  { label: 'Home', path: '/' },
  { label: 'KPI Dashboard', path: '/dashboard' },
  { label: 'Q1 Report', path: '/report' }
];

export const metadata: Metadata = {
  title: 'COGS 303 Project',
  description: 'Adaptive dashboard',
}

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter_reg.className} antialiased`}
      >
          <div className="flex">
            <div className="w-72 sticky top-0 h-screen">
              <Sidebar items={items}/>
            </div>
            <div className="flex-1 p-6 bg-white flex flex-col">
              <Header />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
