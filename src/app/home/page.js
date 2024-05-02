import "@/app/home/homePage.css";
import { Video } from "../ui/Video";

function HomePage() {
  return (
    <>
      <div className="mainContainer">
        <h1>
          Providing <em>MORE</em> engineering for the aviation industry!
        </h1>
      </div>
      <div className="videoContainer">
        <div>
          <Video />
        </div>
      </div>
    </>
  );
}

export default HomePage;
