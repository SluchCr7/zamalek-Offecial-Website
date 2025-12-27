import { Inter, Barlow, Lateef } from "next/font/google";
import "./globals.css";
import { NewsContextProvider } from "./Context/NewsContext";
import { AlertContextProvider } from "./Context/AlertContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext";
import LayoutComponent from "@/Components/LayoutComponent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const lateef = Lateef({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-lateef",
});

export const metadata = {
  title: "Zamalek SC | Official Website",
  description: "Official website of Zamalek Sporting Club - The Pride of Art and Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${lateef.variable}`}>
      <body className="font-body antialiased pt-24">
        <ThemeProvider>
          <AlertContextProvider>
            <AuthContextProvider>
              <NewsContextProvider>
                <LayoutComponent>
                  {children}
                </LayoutComponent>
              </NewsContextProvider>
            </AuthContextProvider>
          </AlertContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
