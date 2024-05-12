import Image from "next/legacy/image";
import "@/app/work/stc/stcPage.css";
import { Video } from "@/app/ui/LoopedVideo";

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
  return (
    <>
      <div className="STCNumContainer">
        <h2>{airCraftInfo.FAASTCNumber}</h2>
      </div>
      <Video />
      <div className="STCContainer">
        <div className="STCTextContainer">
          <p>
            <strong>Aircraft:</strong> {airCraftInfo.aircraft}
          </p>
          <div className="CessnaPictureContainer">
            <Image
              src="/Cessna_182_2.jpg"
              width={700}
              height={600}
              priority={true} // {false} | {true}
              alt="Front of a Cessna 182"
            />
          </div>
          <p>
            <strong>Description:</strong> {airCraftInfo.description}
          </p>
          <p>
            <strong>Limitations:</strong> {airCraftInfo.limitations}
          </p>
          <p>
            <strong>Installation:</strong> {airCraftInfo.installation}
          </p>

          <div
            style={{
              borderBottom: "8px solid #314459",
              borderRadius: "20px",
              width: "100%",
            }}
          ></div>

          <h3>Call or Email today to get this STC for your aircraft!</h3>
          <h4>(360)391-7468 / mohreng@outlook.com</h4>
        </div>
      </div>
      <div className="familySeatBeltImage">
        <div>
          <Image
            // style={{ padding: "50px" }}
            src="/familyOutsideOfPlane.jpg"
            width={700}
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
