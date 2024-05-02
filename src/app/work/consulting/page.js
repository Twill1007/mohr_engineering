import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import "../consulting/ConsultingPage.css";

function ConsultingPage() {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <div className="imageWrapper aircraftImageFirst">
              <Image
                src="/smallPlan.png"
                width={800}
                height={500}
                alt="Cessna"
              />
            </div>
          </div>
          <div className="textContainer">
            <p>
              Mohr Engineering specializes in offering tailored consulting
              services to aerospace entities in need of expert guidance in
              stress analysis for their projects.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            paddingTop: "150px",
            justifyContent: "space-around",
          }}
        >
          <div className="textContainer">
            <p>
              With a wealth of experience and in-depth knowledge, we navigate
              the intricacies of the Federal Aviation Regulations (FAR) Part 23
              and 25 with finesse. Our proficiency extends to a spectrum of
              stress analysis domains, ensuring comprehensive support for our
              clientele.
            </p>
          </div>
          <div className="imageWrapper aircraftImageSecond">
            <Image
              src="/interiorAircraft.jpg"
              width={1000}
              height={500}
              alt="interior of aircraft"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultingPage;
