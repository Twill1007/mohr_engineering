import Image from "next/image";
import "@/app/work/stc/stcPage.css";
import { Video } from "@/app/ui/Video";

function STCPage() {
  const airCraftInfo = {
    aircraft: "Cessna 182 models 182F – 182Q (except 1980 model)",
    what: "Installation a seat belt in the center of the rear bench seat of a Cessna 182. This STC creates a third seat position in the rear bench seat, to seat three children. This makes the C182 into a 5-occupant aircraft!",
    limitations:
      "There is a weight restriction of 100 lbs for the center, and 120 lbs each for the outboard occupants. The OEM two place configuration for the bench is not changed in any way and so the limitations are only for when the center position is occupied.",
    installation:
      "The STC installation modifies the hardware at the center seat belt attachment to accommodate a third seat belt. The hardware modification is necessary to position the seat belt ends for proper loading into the structure. A placard installation on the back of the pilot seat is also required. Installation time (including paperwork) is about a couple hours for the A&P/IA.",
  };
  return (
    <div className="STCContainer">
      <div className="imageWrapper">
        <Video />
      </div>
      <div className="STCTextContainer">
        <h2>{airCraftInfo.aircraft}</h2>
        <p>
          <strong>What:</strong> {airCraftInfo.what}
        </p>
        <p>
          <strong>Limitations:</strong> {airCraftInfo.limitations}
        </p>
        <p>
          <strong>Installation:</strong> {airCraftInfo.installation}
        </p>
      </div>
    </div>
  );
}

export default STCPage;
