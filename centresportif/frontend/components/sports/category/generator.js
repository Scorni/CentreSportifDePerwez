import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import  useWindowDimensions  from '../../common/WindowsProperties'
import { Slide } from  '@material-ui/core';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function HeadGenerator(){
  {/** add slide effect on header */}
  return(
      <h1 className="headGenerator">Sports Individuels</h1>
    
  )
}
export function CardGenerator({tabs,title}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 500, friction: 200 } }));
    useEffect(() => {
      console.log("it works");
    })
    const {width,height} = useWindowDimensions();
    console.log(width)
    if(width > 1024){
        return(
          <animated.div
          key= {tabs}
          className= {"defaultCard"}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) , backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDiv"}>
              <h2>{title}</h2>
            </div>
           
            
          </animated.div>
        )
      }else if(width > 768){
        return(
          <animated.div 
          key= {tabs}
          className= {"responsiveCardBig"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDiv"}>
              <h3>{title}</h3>
            </div>
          </animated.div>
        )
      }else if(width > 450){
        /** trouver une soluce car les headers ne rentrent pas comme papa dans maman */
        return(
          <animated.div 
          key= {tabs}
          className= {"responsiveCardNormal"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDivTiny"}>
              <p>{title}</p>
            </div>
          </animated.div>
        )
      }else if(width < 450){
        return(
          <animated.div 
          key= {tabs}
          className= {"responsiveCardTiny"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDivTiny"}>
              <p>{title}</p>
            </div>
          </animated.div>
        )
      }
      else if(width == 0){
        return(
          <p>
            salam
          </p>
        )
      }
}

/** ajout de conditions en fonction du width de l'écran (taille des images et animation ou non) */