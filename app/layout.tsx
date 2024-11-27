import type { Metadata } from "next";
import "./globals.css";
import { inter_reg } from "./fonts";
import Sidebar from "./components/nav/Sidebar";
import Header from "./components/nav/Header";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/nav/Navbar";
import getCurrentUser from "./actions/getCurrentUser";

const items = [
  { label: 'Home', path: '/' },
  { label: 'KPI Dashboard', path: '/dashboard' },
  { label: 'Q1 Report', path: '/report' }
];

export const metadata: Metadata = {
  title: 'COGS 303 Project',
  description: 'Adaptive dashboard',
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${inter_reg.className} antialiased`}
      >
          <div className="flex">
            <div className="w-72">
              <div className="sticky top-0 h-screen">
                <Sidebar items={items}/>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-6">
              {/* Navbar */}
              <ClientOnly>
                <Navbar currentUser={currentUser} />
              </ClientOnly>

              {/* Page Content */}
              <main>{children}</main>
            </div>
          </div>
          <ClientOnly>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
      </body>
    </html>
  );
}
