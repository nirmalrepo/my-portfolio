// "use client";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import DevVoxel from "./components/canvas/DevVoxel";
import { AnimatePresenceWrapper } from "./components/wrappers/animate-presence-wrapper";

export const metadata = {
  title:
    "Nirmal Fernando | Fullstack Web Developer, Based in Nelson, New Zealand",
  description: "Fullstack Web Developer, Based in Nelson, New Zealand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Providers>
          <NavBar />
          <DevVoxel />
          <AnimatePresenceWrapper>{children}</AnimatePresenceWrapper>
        </Providers>
      </body>
    </html>
  );
}
