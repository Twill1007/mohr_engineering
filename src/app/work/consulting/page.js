import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import "../consulting/ConsultingPage.css";

function ConsultingPage() {
  return (
    <>
      <div className="firstSectionConatainer">
        <div className="imageWrapper aircraftImageFirst">
          <Image
            src="/IMG_5463.jpeg"
            width={800}
            height={500}
            priority={false} // {false} | {true}
            alt="Cessna"
          />
        </div>
        <div className="textContainer">
          <div>
            <p>
              Mohr Engineering specializes in offering tailored consulting
              services to aerospace entities in need of expert guidance in
              stress analysis for their projects. <p> </p>
            </p>
          </div>
        </div>
      </div>

      <div className="secondSectionContainer">
        <div className="textContainer">
          <div>
            <p>
              With a wealth of experience and in-depth knowledge, we navigate
              the intricacies of the Federal Aviation Regulations (FAR) Part 23
              and 25. Our proficiency extends to a spectrum of stress analysis
              domains, ensuring comprehensive support for our clientele.
            </p>
          </div>
        </div>
        <div className="imageWrapper aircraftImageSecond">
          <Image
            src="/interiorAircraft.jpg"
            width={1000}
            height={500}
            priority={false} // {false} | {true}
            alt="interior of aircraft"
          />
        </div>
      </div>
    </>
  );
}

export default ConsultingPage;
