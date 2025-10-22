import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";
import {Lateef} from 'next/font/google'
import Footer from "@/Components/Footer";
import Song from "@/Components/Song";
import { NewsContextProvider } from "./Context/NewsContext";
import { AlertContextProvider } from "./Context/AlertContext";
import { AuthContextProvider } from "./Context/AuthContext";
import AddNewsModal from "@/Components/ModalNewAdd";
import LayoutComponent from "@/Components/LayoutComponent";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200"]
  , style: ["normal", "italic"]
})

const lateef = Lateef({
  subsets: ["latin"]
  , weight: ["400", "700"]
  , style: ["normal"]
})

export const metadata = {
  title: "نادي الزمالك للالعاب الرياضيه",
  description: "نادي الزمالك للالعاب الرياضيه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lateef.className} antialiased bg-white`}
      >
        <AlertContextProvider>
          <AuthContextProvider>
            <NewsContextProvider>
              <LayoutComponent>{children}</LayoutComponent>
            </NewsContextProvider>
          </AuthContextProvider>
        </AlertContextProvider>
      </body>
    </html>
  );
}
