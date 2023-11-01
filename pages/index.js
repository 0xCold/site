import Head from 'next/head';
import TeePreviewWithObserver from '../components/TeePreview';
import Image from 'next/image';

const ALL_TEES = [
  { 
    key: "breakpoint-goosebumps-tee", 
    name: "Breakpoint Goosebumps Tee",
    price: 24.99, 
  },
  { 
    key: "chew-more-glass-tee", 
    name: "Chew More Glass Tee",
    price: 24.99,
  },
  { 
    key: "breakpoint-strange-amsterdam-tee", 
    name: "Breakpoint Strange Amsterdam Tee",
    price: 24.99,  
  },
  { 
    key: "hold-me-closer-fire-dancer-tee", 
    name: "Hold Me Closer Firedancer Tee",
    price: 24.99, 
  },
  { 
    key: "sol-brothers-tee", 
    name: "SOL Brothers Tee",
    price: 24.99,  
  },
  { 
    key: "raj-tee", 
    name: "Raj Tee",
    price: 24.99,  
  },
  { 
    key: "sol-shop-tee", 
    name: "SOL Shop Tee",
    price: 24.99,  
  },
  { 
    key: "toly-tee",
    name: "Toly Tee",
    price: 24.99,  
  },
];

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
      <div className='absolute w-full h-full items-center justify-center flex'>
        <Image src="/images/logo-transparent.png" width={500} height={150} /> 
      </div>
      <div className='animate-custombounce text-white text-2xl absolute w-full items-center text-center justify-center flex bottom-10 font-bold'>
        <span>&#8595;&#8595;&#8595;</span>
      </div>
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
          <Image src="/images/logo-outline.png" width={150} height={150} /> 
        </a>
      </div>
    </div>
  );
}
