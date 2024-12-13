import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template:
      "सर्व प्रयास सामाजिक संस्था",
    default:
      "सर्व प्रयास सामाजिक संस्था : Best Ngo In Ujjain",
  },
  description:
    "A unique creative portfolio designed by Sateesh.",
    icons: {
      icon: "/assets/favicon.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        
        <Header/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
