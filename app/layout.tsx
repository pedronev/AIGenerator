import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "AI",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignOutUrl='/'>
      <html lang="en">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn >
            <UserButton signInUrl="/dashboard"/>
          </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
