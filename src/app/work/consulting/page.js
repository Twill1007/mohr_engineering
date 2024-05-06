import React from "react";
import Image from "next/image";
import "../consulting/ConsultingPage.css";

// Import your images
import LrgPlaneLandImage from "../../../../public/LrgPlaneLand.jpg";
import Cessna182Image from "../../../../public/Cessna_182.jpg";

function ConsultingPage() {
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div className="imagesContainer">
          <div className="imageContainer">
            <Image
              src={LrgPlaneLandImage}
              layout="responsive"
              alt="Large Plane Landing"
            />
          </div>
          <div className="imageContainer">
            <Image
              src={Cessna182Image}
              layout="responsive"
              alt="Small Plane Landing"
            />
          </div>
        </div>
      </div>

      <div>ConsultingPage</div>
    </div>
  );
}

export default ConsultingPage;
