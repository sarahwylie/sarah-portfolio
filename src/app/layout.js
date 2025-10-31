import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Sarah Wylie",
  description: "Developer, Nature Enthusiast, Activist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSans.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
