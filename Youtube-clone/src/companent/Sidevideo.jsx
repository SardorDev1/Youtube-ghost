import React from 'react';

const Sidevideo = ({ video, onSelectedVideo }) => {
if(video.id.kind === "youtube#channel"){
    
}
    return (
        <div className='father'>
         
                {video.id.kind === "youtube#playlist" ? (
                    <>
                     
                    </>
                ) :  (
                    <>
                      <div className="videoitems" onClick={() => onSelectedVideo(video)} >
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