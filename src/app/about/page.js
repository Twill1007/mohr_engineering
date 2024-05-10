import Image from "next/legacy/image";
import "@/app/about/aboutPage.css";

function AboutPage() {
  return (
    <>
      <h1>About Mohr Engineering</h1>
      <div className="aboutContainer">
        <div className="aboutImageWrapper">
          <Image
            src="/IMG_3054.jpeg"
            width={700}
            height={500}
            alt="View from Cessna"
          />
        </div>

        <div className="aboutMohr">
          Mohr Engineering Services is based in Blackfoot, Idaho and was started
          in 2019 by Trevor Williams to provide consulting services to the
          aerospace/aviation industry. The name Mohr comes from Mohr’s Circle in
          mechanical stress analysis which is a graphical tool to help the
          engineer visualize stress levels for different orientations. The name
          Mohr indicates that the company does stress analysis and provides
          “More” engineering for its clients. It is Mohr Engineering’s goal to
          go beyond the client’s expectations by doing more and providing more
          quality engineering services.
        </div>
      </div>

      <h1>About Trevor Williams</h1>
      <div className="aboutTrevorContainer">
        <div className="aboutTrevor">
          <p>
            As soon as I got my mechanical engineering degree, I kicked off my
            career as an engineer for an aerospace company in western
            Washington. I started out as a designer but early on I became
            intrigued with stress analysis work and took advantage of an open
            position. This was a very enjoyable and fulfilling job! However, due
            to the close link of the aerospace industry with the economy’s ups
            and downs, I chose to obtain my Professional Engineering license to
            help me to be more valuable for other industries if I needed to make
            a change.
          </p>

          <p>
            After 10 years in aerospace as a Stress Engineer, I would later move
            with my family of 5 to Idaho. Idaho would have less (basically zero)
            aerospace job opportunities for engineers but my passion for
            aerospace/aviation remained strong. It didn’t take long after moving
            to Idaho that I decided to start my own company to be able to do
            engineering work in aerospace. I started the company to do contract
            consulting where I could use my stress analysis skills. I have had
            contract jobs ranging from trains to planes doing stress engineering
            work.
          </p>

          <p>
            Around when the company was formed, I decided to obtain my private
            pilot’s license as this was a long-awaited aspiration of mine. After
            about 15 months of training, I finally achieved my goal. Now I could
            share this with my family! But wait, I couldn’t share it with the
            whole family as the aircraft I had access to in nearby clubs were
            4-seaters. That’s when I had the idea: Develop an STC to seat 3 kids
            in the back seat and make the plane a 5-seater. I decided the best
            aircraft to do this for was the Cessna 182. The 182 is a good pick
            as it is a very versatile aircraft which brings a well-rounded
            combination of benefits: more power, speed and great useful load
            than your typical pilot trainer. See STC section on this website.
            Now I can fly my whole family and share the joy of aviation all
            together!
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
