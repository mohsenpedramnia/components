import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderdList = videos.map(video => {
    return <VideoItem />;
  });
  return <div>{renderdList}</div>;
};

export default VideoList;
