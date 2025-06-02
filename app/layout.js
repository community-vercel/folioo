import './globals.css';

export const metadata = {
  title: 'Folio3 - Digital Transformation Solutions',
  description: 'Empowering businesses with software, mobile apps, AI, and IoT solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}