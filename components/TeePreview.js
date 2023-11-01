import { useState } from 'react';
import { useSpring, animated, useInView } from 'react-spring';
import Image from "next/image"

export default function TeePreviewWithObserver(props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  return (
    <div ref={ref}>
      <TeePreview isVisible={inView} tee={props.tee} />
    </div>
  );
}


function TeePreview(props) {
  const [isFocused, setIsFocused] = useState(false);
  const animation = useSpring({
    opacity: props.isVisible ? 1 : 0,
    transform: props.isVisible ? 'translateY(0)' : 'translateY(50px)',
  });
  const teeUrl = `https://653f3e-3.myshopify.com/products/${props.tee.key}`;
  const images = {
    base: `/images/tees/${props.tee.key}.png`,
    focused: `/images/tees/${props.tee.key}-focused.png`,
  }
  return (
    <animated.div style={animation}>
      <a 
        href={teeUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer" 
      >
        <Image 
          src={isFocused ? images.focused : images.base} 
          width={350}
          height={450}
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        />
        <h1 className='font-bold'>{props.tee.name}</h1>
        <h1 className='italic'>${props.tee.price}</h1>
      </a>
    </animated.div>
  )
}