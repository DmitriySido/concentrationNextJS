import SideNavigation from "@/components/UI/sideNavigation/SideNavigation";
import { Montserrat } from 'next/font/google'
import './globalStyle.scss'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Концентрация',
};

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SideNavigation/>
          {children}
      </body>
    </html>
  );
}
