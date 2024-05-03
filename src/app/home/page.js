"use client";
import "@/app/home/homePage.css";
import { Video } from "../ui/Video";
import Link from "next/link";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <div className="mainContainer"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="videoContainer">
          <div>
            <Video />
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
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontFamily: "Roboto",
                color: "white", // Customize text color
                fontSize: "40px",
              }}
            >
              <div
                style={{
                  paddingBottom: "50px",
                  width: "1600px",
                }}
              >
                <h1 className="roboto-thin">Mohr Engineering Services, LLC</h1>
              </div>
              <div
                style={{
                  textAlign: "center",

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h2 className="roboto-thin">
                  Providing <span className="roboto-thin-ital">MORE</span>{" "}
                  engineering for the aviation industry!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homePageTextContainer">
        <div
          style={{
            borderTop: "8px solid #314459",
            borderRadius: "20px",
            width: "75%",
          }}
        ></div>

        <h2
          style={{ paddingTop: "50px" }}
          className="roboto-thin"
        >
          Mohr Engineering specializes in offering tailored consulting services
          to aerospace entities in need of expert guidance in stress analysis
          for their projects.
        </h2>
        <p>FAA STC No.SA02784SE</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            borderBottom: "8px solid #314459",
            borderRadius: "20px",
            width: "75%",
          }}
        ></div>
      </div>
      <div className="homePagePictureContainer">
        <Link
          className="b747Pic"
          href="/work/consulting"
        >
          <Image
            src="/B747.jpg"
            width={500}
            height={500}
            priority={true} // {false} | {true}
            alt="B747 plane"
          />
          <div style={{ fontWeight: "bolder" }}>Consulting</div>
        </Link>
        <Link
          className="stcSeatBelt"
          href="/work/stc"
        >
          <Image
            src="/SeatBelt.png"
            width={500}
            height={500}
            priority={true} // {false} | {true}
            alt="Seat Belts in back of Cessna 182"
          ></Image>
          <div style={{ fontWeight: "bolder" }}>STC</div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
