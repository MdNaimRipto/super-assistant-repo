import Footer from '@/Components/Shared/Footer';
import Navbar from '@/Components/Shared/Navbar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
