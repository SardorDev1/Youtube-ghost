import React from 'react';
import Sidevideo from './Sidevideo';


const ListVideo = ({ videos, onSelectedVideo }) => {
    const videolist = videos.map(video => (
        <Sidevideo onSelectedVideo={onSelectedVideo}
            key={video.id.videoId}
            video={video} />
    ));

    return (
        <div>
            {videolist}
        </div>
    );
};



export default ListVideo;