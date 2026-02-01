import video from "../../assets/video.mp4";

function VideoComponents() {
  return (
    <video controls>
      <source src={video} type="video/webm" />
    </video>
  );
}

export default VideoComponents;
