import { Carousel, Timeline } from "flowbite-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-11/12 m-auto h-72 md:h-96 rounded-none">
        <Carousel indicators={false}>
          <div className="bg-orange-700 h-96"></div>
          <div className="bg-green-500 h-96"></div>
          <div className="bg-blue-500 h-96"></div>
        </Carousel>
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
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The National Service Scheme (NSS) is a Central Sector Scheme
                  of the Government of India, Ministry of Youth Affairs &
                  Sports. It provides opportunities to the student youth of 11th
                  & 12th Class of schools at +2 Board level and student youth of
                  Technical Institutions, Graduate & Post Graduate at colleges
                  and University level of India to take part in various
                  government-led community service activities & programs.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The sole aim of the NSS is to provide hands-on experience to
                  young students in delivering community service.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
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
          <Timeline reversed={true}>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The Konark wheel in the NSS badge having 8 bars signifies the
                  24 hours of the day, reminding the wearer to be ready for the
                  service of the nation round the clock i.e. for 24 hours.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  Red colour in the badge signifies the energy and spirit
                  displayed by the NSS volunteers.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The Blue colour signifies the cosmos of which the NSS is a
                  tiny part, ready to contribute its share for the welfare of
                  mankind.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
