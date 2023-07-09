import Bullets from "../comps/TimelineBullets";
import data from "../utils/HomeData";
import Testimonials from "../comps/homePage/Testimonials";
import LatestBlogs from "../comps/homePage/LatestBlogs";
import OurJourney from "../comps/homePage/OurJourney";
import Conclave from "../comps/homePage/Conclave";
import GoalandVision from "../comps/homePage/GoalandVision";

export default function Home() {
  return (
    <div className="min-h-screen">
        <div className="w-full h-[20rem] sm:h-[30rem] lg:h-screen relative ease-in duration-300">
          <img src="jgecclg.jpg" alt="" className="h-full w-full" />
          <div className="absolute left-8 md:left-16 top-[70%]">
            <p className="text-4xl md:text-[4rem] md:pb-5 text-white  uppercase text-start">NSS JGEC</p>
            <p className="text-xl md:text-4xl text-white ">Community before self</p>
          </div>
        </div>
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
      <GoalandVision/>
      <Conclave/>
      <OurJourney/>
      <LatestBlogs/>
      <Testimonials/>
    </div>
  );
}
