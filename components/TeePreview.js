import { useState } from 'react';
import { useSpring, animated, useInView } from 'react-spring';

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
  const teeImage = `images/tees/${props.tee.key}.png`;
  const focusedTeeImage = `images/tees/${props.tee.key}-focused.png`;
  const teeUrl = `https://653f3e-3.myshopify.com/products/${props.tee.key}`;
  const animation = useSpring({
    opacity: props.isVisible ? 1 : 0,
    transform: props.isVisible ? 'translateY(0)' : 'translateY(50px)',
  });
  return (
    <animated.div style={animation}>
      <a 
        href={teeUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer w-[350px] h-[450px]" 
      >
        <img 
          src={isFocused ? focusedTeeImage : teeImage} 
          width='100%' 
          height="100%"
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        />
        <h1 className='font-bold'>{props.tee.name}</h1>
        <h1 className='italic'>$24.95</h1>
      </a>
    </animated.div>
  )
}