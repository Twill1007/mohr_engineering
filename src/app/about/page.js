import Image from "next/legacy/image";
import "@/app/about/aboutPage.css";

function AboutPage() {
  return (
    <>
      <h1 className="aboutTitle">About Mohr Engineering</h1>
      <div className="aboutContainer">
        <div className="aboutImageWrapper">
          <Image
            src="/IMG_3054.jpeg"
            width={700}
            height={500}
            alt="View from Cessna"
            priority
          />
        </div>

        <div className="aboutMohr">
          Mohr Engineering Services, headquartered in Blackfoot, Idaho, was
          established in 2019 by Trevor Williams with a focus on delivering
          consultancy expertise to the aerospace/aviation sector. The choice of
          the name Mohr is derived from Mohr’s Circle, a fundamental tool in
          mechanical stress analysis utilized to visually depict stress
          distributions across various orientations. This nomenclature
          underscores the company's specialization in stress analysis and
          commitment to exceeding client expectations by delivering
          comprehensive engineering solutions. Mohr Engineering endeavors to
          provide superior quality engineering services, aiming to surpass
          conventional standards and deliver unparalleled value to its
          clientele.
        </div>
      </div>

      <h1 className="aboutTitle">About Trevor Williams</h1>
      <div className="aboutTrevorContainer">
        <div className="aboutTrevor">
          <p>
            Upon graduating with a mechanical engineering degree, I embarked on
            my professional journey as an engineer within the aerospace sector
            in western Washington. Initially employed as a designer, my
            fascination with stress analysis quickly emerged, leading me to
            seize an opportunity in this field. This transition proved immensely
            gratifying and intellectually stimulating. However, recognizing the
            aerospace industry's susceptibility to economic fluctuations, I
            pursued licensure as a Professional Engineer to enhance my
            versatility and resilience across various industries.
          </p>

          <p>
            After a decade of dedicated service as a Stress Engineer in
            aerospace, my family of five relocated to Idaho, a region with
            minimal aerospace engineering opportunities. Despite this shift, my
            passion for aerospace and aviation remained unwavering. Shortly
            after settling in Idaho, I made the pivotal decision to establish my
            own consultancy, aimed at offering engineering services tailored to
            the aerospace domain. Specializing in contract consulting, I
            leveraged my expertise in stress analysis across diverse projects,
            spanning from trains to aircraft.
          </p>

          <p>
            Concurrent with the inception of my company, I embarked on a
            personal milestone by obtaining my private pilot’s license—a
            long-standing aspiration. Following training spanning over 15
            months, I successfully attained this goal, eager to share the
            experience with my family. However, the limitation of four-seater
            aircraft in nearby clubs prompted an innovative solution: the
            development of a Supplemental Type Certificate (STC) to accommodate
            an additional passenger in the back seat, effectively transforming
            the aircraft into a five-seater. Recognizing the Cessna 182's
            versatility and performance attributes, I committed to this
            endeavor, enabling me to realize the vision of flying with my entire
            family and fostering a shared appreciation for aviation. For further
            details on the STC development, please refer to the dedicated
            section on our website.
          </p>
        </div>

        <div className="aboutTrevorImageWrapper">
          <Image
            src="/TrevImage2.jpg"
            width={600}
            height={800}
            alt="Cessna"
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
