import Image from "next/legacy/image";
import "@/app/work/stc/stcPage.css";
import { Video } from "@/app/ui/LoopedVideo1";
import StyleBar from "@/app/ui/styleBar";

function STCPage() {
  const airCraftInfo = {
    FAASTCNumber: "FAA STC No. SA02784SE",
    aircraft: "Cessna 182 models 182F through 182Q (except 1980 model)",
    description:
      "This Supplemental Type Certificate (STC) entails the installation of a seat belt in the center of the rear bench seat of a Cessna 182 aircraft to create a third seat position in the rear bench seat. This STC enables seating for three children, effectively transforming the C182 into a five-occupant aircraft",
    limitations:
      "The STC imposes weight restrictions, permitting a maximum weight of 100 lbs for the center occupant and 120 lbs each for the outboard occupants. It's important to note that the original equipment manufacturer's (OEM) two-place configuration for the bench remains unchanged, and therefore, the limitations only apply when the center position is occupied.",
    installation:
      "The STC installation involves modifying the hardware at the center seat belt attachment to accommodate the addition of a third seat belt. These hardware modifications are essential for positioning the seat belt ends to ensure proper loading into the structure. Additionally, the installation necessitates the placement of a placard on the back of the pilot seat. The entire installation process, including paperwork completion, typically requires approximately a couple of hours for an Airframe and Powerplant (A&P) mechanic with Inspection Authorization (IA).",
  };

  const containerText1Section = {
    text1: "Imagine being able to take one more passenger in your C182!",
    text2: "There's room for one more!",
    text3:
      "This Supplemental Type Certificate (STC) upgrades your Cessna 182 to a 5-seater by adding a seat position at the center of the rear bench seat.",
  };

  const containerText2Section = {
    text1: "Do you have 3 kids?",
    text2: "Do you have grandchildren who like to fly with you?",
    text3: "Do your kids want to share the joy of flying with their friends?",
    text4: "Install this STC and take them flying today!",
  };
  return (
    <>
      <div className="STCPageRibbonImage">
        <div className="STCTitle">Supplemental Type Certificate</div>
        <Image
          src="/jpeg-optimizer_SeatBeltImageRibbon.jpg"
          width={2000}
          height={600}
          objectFit="cover"
          layout="responsive"
          alt="View from interior of plane"
        />
      </div>
      <div className="STCNumContainer">
        <h3>{containerText1Section.text1}</h3>
        <h3>{containerText1Section.text2}</h3>
        <h3>{airCraftInfo.FAASTCNumber}</h3>
      </div>
      <div className="section2Container">
        <div className="section2ContainerChild1">
          {containerText1Section.text3}
        </div>
        <Image
          src="/jpeg-optimizer_SeatBelt.jpg"
          width={800}
          height={500}
          priority={true} // {false} | {true}
          alt="Rear Row of Cessna 182"
        />
      </div>

      <div className="section3Container">
        <h4>{containerText2Section.text1}</h4>
        <h4>{containerText2Section.text2}</h4>
        <h4>{containerText2Section.text3}</h4>
        <h4>{containerText2Section.text4}</h4>
        <Video />
      </div>
      <StyleBar />

      <div className="STCContainer">
        <div className="STCDetailInfoContainer">
          <div className="descriptionContainer">
            <p>
              <strong>Aircraft:</strong> {airCraftInfo.aircraft}
            </p>

            <p>
              <strong>Description:</strong> {airCraftInfo.description}
            </p>
            <p>
              <strong>Limitations:</strong> {airCraftInfo.limitations}
            </p>
            <p>
              <strong>Installation:</strong> {airCraftInfo.installation}
            </p>
          </div>
        </div>
        <div className="CessnaImageContainer">
          <div>
            <Image
              src="/Cessna_182_2.jpg"
              width={800}
              height={600}
              priority={true} // {false} | {true}
              alt="Front of a Cessna 182"
            />
          </div>
        </div>
      </div>

      <StyleBar />
      <div className="contactInfoContainer">
        <h1>Call or Email today to get this STC for your aircraft!</h1>
        <h1>(360)391-7468 / mohreng@outlook.com</h1>
      </div>

      <div className="familySeatBeltImage">
        <div>
          <Image
            // style={{ padding: "50px" }}
            src="/familyOutsideOfPlane.jpg"
            width={800}
            height={500}
            priority={true} // {false} | {true}
            alt="Family Outside of Plane"
          />
        </div>
        <div>
          <Image
            // style={{ padding: "50px" }}
            src="/kidsInBackOfPlane.jpg"
            width={700}
            height={500}
            priority={true} // {false} | {true}
            alt="Family Kids."
          />
        </div>
      </div>
    </>
  );
}

export default STCPage;
