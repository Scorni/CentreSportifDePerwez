import React,{ useRef, useEffect, useState } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,MDBCarouselCaption } from 'mdbreact';
import Link from "next/link";

const ComponentWithDimensions = props => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  var img;

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);
  if(dimensions.width > 1024){
    img = <img className="w-100" src="/static/img/computer/first.jpg" alt="Second slide" />;
  }else{
    img = <img className=" w-100" src="/static/img/responsive/first.jpg" alt="Second slide" />;;
  }
  return (
    <div ref={targetRef}>
      {img}

    </div>
  );
};

const MyCarousel = () => {
  return (
    <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={false} className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          {ComponentWithDimensions()}
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">L'été est là !</h3>
            <Link href='/creation'>
              <a style={{color: "white"}}>Réservation</a>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          {ComponentWithDimensions()}
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">L'été s'en va !</h3>
            <Link href='/creation'>
              <a style={{color: "white"}}>Réservation</a>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          {ComponentWithDimensions()}
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">L'été revient ! </h3>
            <Link href='/creation'>
              <a style={{color: "white"}}>Réservation</a>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
          {ComponentWithDimensions()}
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">L'été dort !</h3>
            <Link href='/actuality/actuality'>
              <a style={{color: "white"}}>Réservation</a>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default MyCarousel;