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
          <div>
            <h1>Engineering Consultants</h1>
            <h2>FAA STC No. SA02784SE</h2>
          </div>
          <Link href={"/work/consulting"}>
            <a>
              <Image
                src="/B747.jpg"
                width={100}
                height={100}
                priority={true} // {false} | {true}
                alt="logo"
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
