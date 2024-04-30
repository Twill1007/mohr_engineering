import Image from "next/image";
import "@/app/globals.css";

function ConsultingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "100px",
      }}
    >
      <div className="pictureContainer">
        <div className="imageWrapper">
          <Image
            src="/smallPlan.png"
            width={1000}
            height={500}
            alt="logo"
          />
        </div>
      </div>
      <div className="textContainer">
        <p>
          Mohr Engineering specializes in offering tailored consulting services
          tailored to aerospace entities in need of expert guidance in stress
          analysis for their projects. With a wealth of experience and in-depth
          knowledge, we navigate the intricacies of the Federal Aviation
          Regulations (FAR) Part 23 and 25 with finesse. Our proficiency extends
          to a spectrum of stress analysis domains, ensuring comprehensive
          support for our clientele.
        </p>
      </div>
    </div>
  );
}

export default ConsultingPage;
