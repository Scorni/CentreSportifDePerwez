import React from 'react';
import { useSpring, animated } from 'react-spring';
import  useWindowDimensions  from '../../common/WindowsProperties'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function CardGenerator({tabs}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 500, friction: 200 } }));

    const {width,height} = useWindowDimensions();
    
    if(width < 1024){
        return(
            <animated.div 
            key= {tabs}
            className= {"responsiveCard"}
            style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
            />
        )
      }else{
        return(
            <animated.div
            key= {tabs}
            className= {"defaultCard"}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) , backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
            />
        )
      }
}

/** ajout de conditions en fonction du width de l'écran (taille des images et animation ou non) */