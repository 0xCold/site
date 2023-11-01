import Image from "next/image"

export default function SplashVideo() {
  return (
    <div>
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
    </div>
  )
}