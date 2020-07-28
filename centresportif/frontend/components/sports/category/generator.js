import React from 'react';
import Link from "next/link";
import { useSpring, animated } from 'react-spring';
import { isMobile} from 'react-device-detect';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function CardGenerator({tabs}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 500, friction: 200 } }));
    if(!isMobile){
        return(
            <animated.div
            key= {tabs}
            class= {`defaultCard`}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) , backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}>
            
            </animated.div>
        )
    }else{
        return(
            <animated.div 
            key= {tabs}
            class= {`defaultCard`}
            style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}/>
        )
    }
}
