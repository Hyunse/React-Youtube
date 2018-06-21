import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
    const videoItmes = props.videos.map((video) => {
        return (
            <VideoListItem 
                video={video}
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
            />
        )
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItmes}
        </ul>
    );
};

export default VideoList;
