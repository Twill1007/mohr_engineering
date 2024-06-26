"use client";
import "@/app/home/homePage.css";
import { VideoLoop } from "../ui/LoopedVideo1";
import Link from "next/link";
import Image from "next/legacy/image";

function HomePage() {
  return (
    <>
      <div className="mainContainer"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="loopedVideoContainer">
          <VideoLoop />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
            }}
          ></div>
          <div className="textOverlay">
            <div className="roboto-thin-title">
              Mohr Engineering Services, LLC
            </div>
            <div className="roboto-thin-subTitle">
              Aviation Solutions Engineered for Success!
            </div>
          </div>
        </div>
      </div>

      <div className="homePageTextContainer">
        <div
          style={{
            borderTop: "8px solid #314459",
            borderRadius: "20px",
            width: "50%",
          }}
        ></div>

        <div className="mohrIntroTextContainer">
          Mohr Engineering excels in delivering top-tier consulting services
          tailored to the specific needs of aerospace entities, particularly for
          loads and stress analysis essential for FAA certification projects.
          Our comprehensive documentation ensures seamless compliance with FAA
          certification requirements, satisfying all substantiation data needs
          with precision and reliability.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            borderBottom: "8px solid #314459",
            borderRadius: "20px",
            width: "50%",
          }}
        ></div>
      </div>
      <div className="homePagePictureContainer">
        <Link
          className="b747Pic"
          href="/work/consulting"
        >
          <div className="responsive-image">
            <Image
              src="/B747.jpg"
              width={600}
              height={400}
              objectFit="cover"
              priority={true} // {false} | {true}
              alt="B747 plane"
              className="image-wrapper-aircraft"
            />
          </div>
          <div className="roboto-thin-buttons">Consulting</div>
        </Link>
        <Link
          className="stcSeatBelt"
          href="/work/stc"
        >
          <div className="responsive-image">
            <Image
              src="/SeatBelt.png"
              width={600}
              height={400}
              objectFit="cover"
              priority={true} // or {false}
              alt="Seat Belts in back of Cessna 182"
              className="image-wrapper-aircraft"
            />
          </div>
          <div className="roboto-thin-buttons">STC</div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
