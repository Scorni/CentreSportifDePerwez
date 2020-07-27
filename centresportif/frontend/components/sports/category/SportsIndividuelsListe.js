import React,{ useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card({info}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 500, friction: 200 } }))
    return (
      <animated.div
        class= {` ${info} defaultCard`}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}>

        </animated.div>
    )
  }
const SportIndividuels = (props) => {
    return (
        <div>
          <Card info={"card"}></Card>
          <Card info={"card"}></Card>
        </div>
 
    );
  }
  
  export default SportIndividuels;