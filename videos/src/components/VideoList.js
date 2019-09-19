import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderdList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;
