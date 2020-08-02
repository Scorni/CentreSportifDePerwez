import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import  useWindowDimensions  from '../../common/WindowsProperties'
import { Slide,Paper } from  '@material-ui/core';
import { useRouter } from 'next/router'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export function HeadGenerator({title}){
  const {width,height} = useWindowDimensions();
  
  return (
    <div>
      <div>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <h1 className ="headGenerator">
              {title}
            </h1>
        </Slide>
      </div>
    </div>
  );
    
}
export function CardGenerator({tabs,title}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 500, friction: 200 } }));
    const router = useRouter();
    useEffect(() => {
      if (window.performance) {
        if (performance.navigation.type == 1) {
          if(document.getElementById('reload')){
              console.log(window.location.pathname)
              router.push('./reloadPage?link='+window.location.pathname);          
          }
        }
      }
    })
    const {width,height} = useWindowDimensions();
    if(width > 1024){
        return(
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <animated.div
            id = {"defaultCard"}
            key= {tabs}
            className= {"defaultCard"}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) , backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
            >
              <div className = {"textAnimatedDiv"}>
                <h2 id="defaultTitle">{title}</h2>
              </div>
              
              
            </animated.div>
          </Slide>
        )
      }else if(width > 768){
        return(
          <animated.div 
          key= {tabs}
          className= {"responsiveCardBig"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDiv"}>
              <h3 id="BigTitle">{title}</h3>
            </div>
          </animated.div>
        )
      }else if(width > 449){
        return(
          <animated.div 
          key= {tabs}
          className= {"responsiveCardNormal"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDivTiny"}>
              <p className = {"textInside"}>{title}</p>
            </div>
          </animated.div>
        )
      }else if(width > 50){
        return(
          <animated.div 
          id ={"tinyCard"}
          key= {tabs}
          className= {"responsiveCardTiny"}
          style={{backgroundImage: "url("+ "../../../static/img/"+tabs +")"}}
          >
            <div className = {"textAnimatedDivTiny"}>
              <p className = {"textInside"}>{title}</p>
            </div>
          </animated.div>
        )
      }
      else if(width < 50){
        return(
          <div id= "reload"></div>
        )
      }
}

/** ajout de conditions en fonction du width de l'écran (taille des images et animation ou non) 
 * Resoudre pour 450 width
*/