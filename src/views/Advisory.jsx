import React from "react";
import team from "../utils/advisory-committee.json";
import { Tabs, Button } from "flowbite-react";
import HeroCard from "../comps/HeroCard";
import UnitModal from "../comps/NssUnitModal";
const TeamTabs = () => {
  const years = team.length;
  const [activeTab, setActiveTab] = React.useState(0);
  const [teamData, setTeamData] = React.useState(team[0]);
  const tabsRef = React.useRef();
  return (
    <div className="mb-10">
      <Tabs.Group
        aria-label="Default tabs"
        style={"underline"}
        ref={tabsRef}
        onActiveTabChange={(tab) => {
          setActiveTab(tab);
          setTeamData(team[tab]);
        }}
        className="m-auto"
      >
        <Tabs.Item active title="2023"></Tabs.Item>
        {Array.from({ length: years - 1 }, (_, i) => (
          <Tabs.Item title={team[0].year - i - 1}></Tabs.Item>
        ))}
      </Tabs.Group>
      <div className="-mt-10">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
          {teamData.members.map((hero) => (
            <HeroCard hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default function Advisory() {
  document.title = "NSS | Advisory Committee";
  return (
    <div className="min-h-screen">
      <div className="text-xl">Advisory Committee</div>
      <TeamTabs />
    </div>
  );
}
