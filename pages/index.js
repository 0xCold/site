import Head from 'next/head';
import { useEffect, useState } from 'react';
import TeePreviewWithObserver from '../components/TeePreview';

const MAX_LOGO_ZOOM = 20.0;
const LOGO_ZOOM_INCREMENT = 0.75;
const ALL_TEES = [
  { key: "breakpoint-goosebumps-tee", name: "Goosebumps" },
  { key: "chew-more-glass-tee", name: "Chew More Glass" },
  { key: "breakpoint-strange-amsterdam-tee", name: "Stranger Things" },
  { key: "hold-me-closer-fire-dancer-tee", name: "Firedancer" },
  { key: "sol-brothers-tee", name: "SOL Brothers" },
  { key: "raj-tee", name: "Raj" },
  { key: "sol-shop-tee", name: "Shopify" },
  { key: "toly-tee", name: "Toly" },
];

export default function Home() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [imageSizePercentage, setImageSizePercentage] = useState(1.0);

  const zoomedWidth = 25 * imageSizePercentage;
  const zoomedHeight = 6.25 * imageSizePercentage;
  const isFullyZoomed = imageSizePercentage === MAX_LOGO_ZOOM;
  
  useEffect(() => {
    const handleScroll = () => setLogoVisible(prev => {
      if (prev) {
        setImageSizePercentage(prev => Math.min(prev + LOGO_ZOOM_INCREMENT, MAX_LOGO_ZOOM));
      }
      return true;
    });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>The Candy Machine</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      </Head>
      { logoVisible ?
        (<div className='absolute w-full h-full items-center justify-center flex'>
          <img src="images/logo-transparent.png" width={zoomedWidth} height={zoomedHeight} /> 
        </div>) :      
        (<div className='animate-custombounce text-white text-2xl absolute w-full items-center text-center justify-center flex bottom-10 font-bold'>
          <span>&#8595;&#8595;&#8595;</span>
        </div>)
      }
      <div className='min-h-screen flex flex-col items-center justify-center relative'>
        <video
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
          className='w-screen h-screen -z-20 object-cover block md:hidden'
        >
          <source src="videos/splash-mobile.mp4" type='video/mp4' />
        </video>
        <video
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
          className='w-screen h-screen -z-20 object-cover hidden md:block'
        >
          <source src="videos/splash.mp4" type='video/mp4' />
        </video>
      </div>
      { isFullyZoomed &&
        (<div>
          <div className='text-center sm:container sm:mx-auto'>
            <h1 className='font-bold text-3xl py-3'>Breakpoint 2023 Collection</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 px-4'>
                { ALL_TEES.map(tee => <TeePreviewWithObserver key={tee.key} tee={tee} />) }
            </div>
          </div>
          <div className='text-sm mt-4 w-full flex flex-row text-black justify-center bg-[length:400%_400%] bg-gradient-to-r from-candy-blue via-candy-orange to-candy-green animate-animgradient text-white text-center'>
            <a 
              href="https://twitter.com/TheCandyMachine"
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer" 
            > 
              <img src="images/logo-outline.png" width={150} height={150} /> 
            </a>
          </div>
        </div>)
      }
    </div>
  );
}
