import type { Metadata } from "next";
import "@/styles/normalize.css";
import "@/styles/swiper.css";
import "@/styles/styleguide.css";
import "@/styles/components.css";
import "@/styles/style.css";
import "@/styles/migration.css";

export const metadata: Metadata = {
  title: "Unifi — Local Next.js reference",
  description:
    "Local frontend reference of unifi.baunfire.com, captured with D-j-View and migrated into editable Next.js components.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
