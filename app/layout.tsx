import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://laavannew.vercel.app/"),

  openGraph: {
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    url: "https://laavannew.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/ognew.png",
        width: 1200,
        height: 630,
        alt: "Hargun Weds Ria Invitation",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    images: ["/ognew.png"],
  },

 other: {
    "og:image:secure_url": "https://laavannew.vercel.app/ognew.png",
    "og:image:type": "image/png",
  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
