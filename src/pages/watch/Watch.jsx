import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import ReactPlayer from "react-player";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <ReactPlayer
        className="video"
        url="https://youtu.be/laNA2HgwYXU"
        playing={true}
        controls={true}
        muted={false}
        width="100%"
        height="100%"
      />
    </div>
  );
}
