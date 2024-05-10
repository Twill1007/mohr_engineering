import "@/app/ui/loopedVideo.css";

export function VideoLoop() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%" /* 16:9 aspect ratio */,
      }}
    >
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
      >
        <source
          src="/LoopedVideo_V2.mp4"
          type="video/mp4"
        />
        <h1>Mohr Engineering Services, LLC</h1>
      </video>
    </div>
  );
}

export function Video() {
  return (
    <div className="vidContainer">
      <video
        className="videoContainer"
        controls
        // preload="none"
      >
        <source
          src="/MohrEng_All5_HD.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
