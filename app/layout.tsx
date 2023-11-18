import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
  icons:
    "https://raw.githubusercontent.com/adrianhajdin/travel_ui_ux/2fb7b15bd4472039031e28cb6725326a791c4d44/public/camp.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
