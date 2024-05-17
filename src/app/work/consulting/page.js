import React from "react";
import Image from "next/legacy/image";
import "@/app/work/consulting/consultingPage.css";

// Import your images

import Cessna182Image from "../../../../public/Cessna_182.jpg";

const consultingList = [
  "Structural substantiation reports for STC projects.",
  "Interface-load reports, static test plans/reports, and dynamic test plans for seats.",
  "Stress analysis via both classical hand techniques and FEMAP.",
  "Structural substantiation of interior monuments and aircraft primary structure.",
  "Design review.",
];

function ConsultingPage() {
  return (
    <div>
      <div className="STCPageRibbonImage">
        <div className="STCTitle">Consulting Services</div>
        <Image
          src="/jpeg-optimizer_PlaneLandSmall.jpg"
          width={2000}
          height={600}
          objectFit="cover"
          layout="responsive"
          alt="View from interior of plane"
        />
      </div>

      <div className="consultingTitleContainer">
        <h1></h1>
      </div>
      <div className="consultingTextContainer">
        <div>
          {/* <div
            style={{
              borderBottom: "8px solid #314459",
              borderRadius: "20px",
              width: "100%",
            }}
          ></div> */}
          Mohr Engineering provides consulting services for aerospace companies
          needing stress analysis and substantiation data for their FAA
          certification projects. We have a great amount of experience and
          understanding of the 14 CFR Part 23 and 25 in doing the following:
          {consultingList.map((item, key) => (
            <ul
              className="itemListContainer"
              key={key}
            >
              <li>{item}</li>
            </ul>
          ))}
          {/* <div
            style={{
              borderBottom: "8px solid #314459",
              borderRadius: "20px",
              width: "100%",
            }}
          ></div> */}
        </div>

        <div className="imageContainer2">
          <Image
            src={Cessna182Image}
            width={300}
            height={200}
            layout="responsive"
            alt="Small Plane Landing"
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultingPage;
