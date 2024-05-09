import React from "react";
import Image from "next/image";
import "../consulting/ConsultingPage.css";

// Import your images
import LrgPlaneLandImage from "../../../../public/PlaneLandSmall2.png";
import Cessna182Image from "../../../../public/Cessna_182.jpg";

const consultingList = [
  "Sutructural substantiation reports for STC projects.",
  "Interface-load reports, static test plans/reports dynamic test plans for seat mounted partitions.",
  "Stress analysis via both classical hand techniques and FEMAP.",
  "Interior monuments, aircraft floor (e.g. floor beams, seat tracks, floor panels), and aircraft side monument fittings.",
  "Design review.",
  "See my About Page for more information.",
];

function ConsultingPage() {
  return (
    <div>
      <div className="imagesContainer">
        <Image
          src={LrgPlaneLandImage}
          objectFit="cover"
          layout="responsive"
          alt="Large Plane Landing"
        />
      </div>
      <div className="consultingTitleContainer">
        <h1>Consulting Services</h1>
      </div>
      <div className="consultingTextContainer">
        <div>
          I provide consulting services for aerospace companies needing stress
          analysis help for their projects. I have a great amount of experience
          and understanding of the FAR’s Part 23 and 25 and stress analysis
          doing the following:
          {consultingList.map((item, key) => (
            <ul
              className="itemListContainer"
              key={key}
            >
              <li>{item}</li>
            </ul>
          ))}
        </div>

        <div className="imageContainer2">
          <Image
            src={Cessna182Image}
            width={500}
            height={500}
            layout="responsive"
            alt="Small Plane Landing"
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultingPage;
