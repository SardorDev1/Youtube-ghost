import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Load from "../assets/load.gif"
import AOS from "aos"

import 'aos/dist/aos.css';
import One from './One';






const Video = ({ video: { id: { videoId, channelId  } , snippet:  {   title, channelTitle, description } } }) => {
 

    useEffect(() => {
        AOS.init();
    })
    if (!videoId && !channelId) return <One />;
  
    const Videosrc = `https://www.youtube.com/embed/${videoId}`;


    return (

        <>

  
                   {channelId ? (
<>
<div className="video">

                    </div>
                    <div className="videoinfo" data-aos="fade-up">
                        <h1 className='text-center mt-5'>{title}</h1>
                        <p className='text-center p-5'>{description}</p>
                        <a className=' px-5 btn btn-danger  youtubelink mx-auto text-center d-flex'  href="https://youtube.com">
                 <FontAwesomeIcon className='icon text-center mx-auto' icon={faYoutube} /></a>
                       
                    </div>
       
</>
                   ): (
                    <>
                     <div data-aos="fade-up" className="video">
                        <iframe frameBorder="0" width="100%" height="400px" allowFullScreen title='Video Play' src={Videosrc} />

                    </div>
                    <div className="videoinfo">
                        <h1>{title}</h1>
                     
                        <p>{description}</p>
                    </div>
       
                    </>
                   )}
        
        </>
    );
};



export default Video;