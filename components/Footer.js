import Image from "next/image";

export default function Footer() {
  return (
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
  )
}