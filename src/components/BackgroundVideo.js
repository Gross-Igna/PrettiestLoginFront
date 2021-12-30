import React from 'react';
import VideoLooper from 'react-video-looper'
import sampleVideo from '../img/backgroundVideo.mp4'

const BackgroundVideo = () => {
    return(
        <div>
            <VideoLooper source={sampleVideo} start={0.00} end={10.00} height="100%"/>
        </div>
    )
}

export default BackgroundVideo;