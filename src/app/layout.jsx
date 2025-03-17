import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "MyFood Página Inicial",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-branco overscroll-x-none overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
