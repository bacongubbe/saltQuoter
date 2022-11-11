import '../styles/style.css';
import AppFooter from "./(components)/AppFooter";
import MainHeader from './(components)/MainHeader';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head></head>
      <body>
        <MainHeader />
        <main className='main'>{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}
