export const metadata = {
  title: "Charles ABJ • Front-End Dev",
  description:
    "Charles ABJ • Développeur Front-End - Venez jetez un œil à mon Portfolio !",
  keywords: "portfolio, développeur web, projets, react, Charles ABJ",
  author: "Charles ABJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
