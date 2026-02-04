import { Metadata } from "next";
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


// export const metadata: Metadata = {
//   metadataBase: new URL("https://hargunwedsria.invitearc.com"),

//   openGraph: {
//     title: "Hargun Weds Ria - InviteArc",
//     description: "Premium wedding invitation templates by InviteArc",
//     url: "https://hargunwedsria.invitearc.com/",
//     siteName: "InviteArc",
//     images: [
//       {
//         url: "/og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hargun Weds Ria Invitation",
//       },
//     ],
//     type: "website",
//   },


//   twitter: {
//     card: "summary_large_image",
//     title: "Hargun Weds Ria - InviteArc",
//     description: "Premium wedding invitation templates by InviteArc",
//     images: ["/og.jpg"],
//   },

//  other: {
//     "og:image:secure_url": "https://hargunwedsria.invitearc.com/og.jpg",
//     "og:image:type": "image/jpeg",
//   },


// };




// new code added


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    openGraph: {
      title: "Hargun Weds Ria - InviteArc",
      description: "Premium wedding invitation templates by InviteArc",
      type: "website",
      url: "https://hargunwedsria.invitearc.com/", // e.g.: https://acme.com/blog
      images: [
        {
          // image extension can be anything like jpg, png, webp, etc.
          url: "https://hargunwedsria.invitearc.com/og.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: "Hargun Weds Ria - InviteArc",
      description: "Premium wedding invitation templates by InviteArc",
      card: "summary_large_image",
      images: [
        {
          url: "https://hargunwedsria.invitearc.com/og.jpg",
          width: 1200,
          height: 630,
          type: "image/jpg",
        },
      ],
    },
  }
}




// end of new code 













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
