import './globals.css';

export const metadata = {
  title: 'Iqbal Triwicaksono Ibrahim — Data Analyst',
  description: 'Portfolio of Iqbal Triwicaksono Ibrahim, a detail-oriented Data Analyst specializing in SQL, Python, Power BI, and Looker Studio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
