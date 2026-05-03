import type { Metadata } from "next";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Air Solution | Professional HVAC Services",
  description: "Your trusted HVAC experts for heating, cooling, and air quality solutions. 24/7 emergency service available. Licensed and insured technicians.",
  keywords: "HVAC, heating, cooling, air conditioning, AC repair, furnace, air quality, emergency HVAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Banner />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
