import React from 'react';
import { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css';
const Sidevideo = ({ video, onSelectedVideo }) => {
if(video.id.kind === "youtube#channel"){
    

}


useEffect(() => {
    AOS.init();
})
    return (
        <div className='father'>
         
                {video.id.kind === "youtube#playlist" ? (
                    <>
                     
                    </>
                ) :  (
                    <>
                      <div className="videoitems" data-aos="fade-down-left"  onClick={() => onSelectedVideo(video)} >
                        <img className='preview' src={video.snippet.thumbnails.medium.url} alt="overlay" />
                        <div className="titleVideo">
                            <b>{video.snippet.title}</b>
                        </div>
                        </div>
                    </>
                )
                }

            </div>
    
    );
};


export default Sidevideo;