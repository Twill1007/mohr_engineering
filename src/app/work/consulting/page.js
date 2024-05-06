import React from "react";
import Image from "next/image";
import "../consulting/ConsultingPage.css";

// Import your images
import LrgPlaneLandImage from "../../../../public/PlaneLandSmall2.png";
import Cessna182Image from "../../../../public/Cessna_182.jpg";

function ConsultingPage() {
  return (
    <div>
      <div>
        <div className="imagesContainer">
          <div className="imageContainer1">
            <Image
              src={LrgPlaneLandImage}
              objectFit="cover"
              layout="responsive"
              alt="Large Plane Landing"
            />

            <h1
              style={{
                paddingTop: "150px",
                fontSize: "70px",
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                width: "50%",
              }}
            >
              Consulting Services
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "50%",
                paddingLeft: "5%",
                paddingRight: "5%",
                alignContent: "center",
                fontSize: "50px",
              }}
            >
              proident Duis dolor minim incididunt non enim occaecat magna
              veniam veniam cillum enim officia non occaecat non. nisi sit in
              fugiat nisi elit aute commodo fugiat ut do labore amet voluptate
              nostrud cillum mollit reprehenderit aliqua. eiusmod in consectetur
              commodo aute esse non incididunt sit labore esse nostrud officia
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
      </div>

      <div>ConsultingPage</div>
    </div>
  );
}

export default ConsultingPage;
