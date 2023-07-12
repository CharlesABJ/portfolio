import "./globals.css";

export const metadata = {
  title: "CharlesABJ",
  description: "CharlesABJ, Venez jetter un œil à mon Portfolio !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <script
          src="https://kit.fontawesome.com/a117eb47ea.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
