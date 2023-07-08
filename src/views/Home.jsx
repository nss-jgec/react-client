import { Carousel, Timeline } from "flowbite-react";
import Bullets from "../comps/TimelineBullets";
import data from "../utils/HomeData";
import Testimonials from "../comps/Testimonials";
import LatestBlogs from "../comps/LatestBlogs";
import OurJourney from "../comps/OurJourney";
import Conclave from "../comps/Conclave";
import GoadandVision from "../comps/GoadandVision";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <div className="w-11/12 m-auto h-72 md:h-96 rounded-none">
        <Carousel indicators={false}>
          <div className="bg-orange-700 h-96"></div>
          <div className="bg-green-500 h-96"></div>
          <div className="bg-blue-500 h-96"></div>
        </Carousel>
      </div> */}
      <div
        className="flex flex-col items-center lg:flex-row justify-evenly m-4 p-2"
        id="about"
      >
        <img
          className="h-auto min-w-[300px] w-2/3 lg:h-64 lg:w-96 object-fill"
          src="./nss_parade.jpg"
          alt="about"
        />
        <div className="max-w-xl w-auto p-4 text-left">
          <Bullets points={data["Intro"]} />
        </div>
      </div>
      <div
        className="flex flex-col items-center lg:flex-row-reverse justify-evenly m-4 p-2"
        id="about"
      >
        <img
          className="h-auto min-w-[300px] w-2/3 max-w-[200px] lg:w-96 object-fill"
          src="./nss.png"
          alt="about"
        />
        <div className="max-w-xl w-auto p-4 text-left">
          <Bullets points={data["Logo"]} />
        </div>
      </div>
      <GoadandVision/>
      <Conclave/>
      <OurJourney/>
      <LatestBlogs/>
      <Testimonials/>
    </div>
  );
}
