import Head from 'next/head';
import SplashVideo from '../components/SplashVideo';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Candy Machine</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      </Head>
      <SplashVideo />
      <ProductGrid />
      <Footer />
    </div>
  );
}
