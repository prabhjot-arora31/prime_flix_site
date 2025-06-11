// app/layout.js
import "./globals.css";
import { Nunito_Sans, Poppins } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "PrimeFlix",
  description: "The ultimate movie discovery and review platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <body className="font-nunito bg-black text-white">{children}</body>
    </html>
  );
}
