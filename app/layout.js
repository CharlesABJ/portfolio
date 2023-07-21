import "./globals.css";

export const metadata = {
  title: "CharlesABJ",
  description: "CharlesABJ, Venez jetter un œil à mon Portfolio !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
