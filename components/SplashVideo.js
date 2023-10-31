export default function SplashVideo() {
    return (
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
    )
}