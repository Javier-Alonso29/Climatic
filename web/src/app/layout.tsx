import "./globals.css";

export const metadata = {
  title: "Climatic",
  description: "La forma más sencilla de consultar el clima de Monterrey, NL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
      <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
