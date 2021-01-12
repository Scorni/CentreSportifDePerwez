import React, { useState } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import HeadGenerator from '../sports/category/generator';
import Link from 'next/link';
import {ACTUALITY_QUERY} from '../actualite/Query';
import { Query, Mutation } from 'react-apollo';
import { perPage } from '../../config';


SwiperCore.use([Autoplay,Navigation,Pagination])

const MyCarousel = (props) => {

  return (
    <>
<Query query={ACTUALITY_QUERY} 
                >
                    {({data,error,loading})=>{
                        if(loading) return <p>Chargement...</p>
                        if(error)   return <p>Erreur : {error.message}</p>
                        
                        return <div className="customAccordion">
                            <Swiper
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                        }}
                                        tag="section"
                                        wrapperTag="ul"
                                        navigation pagination
                                        style={{marginTop : "2em"}}
                                    >
                            {data.actualities.map(actuality =>
                                        <SwiperSlide tag="li" style={{listStyle : "none"}}>
                                            <HeadGenerator title = {actuality.title} />
                                            <Link href='/actualite/actuality'>
                                                <h6 className ="linkToActuality">
                                                    Vers les actualités
                                                </h6>
                                            </Link>
                                        </SwiperSlide>
                                )}
                                 </Swiper>
                                </div>
                    }}
                </Query>
       

        <style jsx global>{`
                .swiper-container {
                    height: 120px
                    
                }
       `}</style>
    </>
)
}

export default MyCarousel;