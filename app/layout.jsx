import "./globals.css";

export const metadata = {
  title: "Order By Yourself",
  description: "Grabbing a coffee has never been easier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
