import "../globals.css";

export const metadata = {
  title: "Your daily NextNews",
  description:
    "Your trusted source for the latest updates, exclusive reports, and stories that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
