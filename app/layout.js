import { Outfit, Outfit, Ovo, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "Portfolio - Dhiru.",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
