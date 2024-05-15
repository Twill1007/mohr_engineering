import React from "react";
import "@/app/ui/loopedVideo1.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="vidContainer">
        <Link
          href="https://www.youtube.com/watch?v=ES8rCaqibLA"
          target="_blank"
          rel="noopener noreferrer"
          className="videoLink"
        >
          <img
            src="/kidsSeatBeltImage2.jpg"
            alt="Thumbnail for YouTube video"
            className="videoThumbnail"
          />
          <FontAwesomeIcon
            viewBox="-1000 -1000 2500 2500"
            icon={faPlayCircle}
            className="playIcon"
          />
        </Link>
      </div>
    </div>
  );
}
