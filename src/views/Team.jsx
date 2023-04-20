import React from "react";
import team from "../utils/team.json";
import { Tabs, Button } from "flowbite-react";
import HeroCard from "../comps/HeroCard";
import UnitModal from "../comps/NssUnitModal";
const TeamTabs = () => {
  const years = team.length;
  const [activeTab, setActiveTab] = React.useState(0);
  const [teamData, setTeamData] = React.useState(team[0]);
  const tabsRef = React.useRef();
  return (
    <>
      <Tabs.Group
        aria-label="Default tabs"
        style="fullWidth"
        ref={tabsRef}
        onActiveTabChange={(tab) => {
          setActiveTab(tab);
          setTeamData(team[tab]);
        }}
      >
        <Tabs.Item active title="2023">
          Session 2023
        </Tabs.Item>
        {Array.from({ length: years - 1 }, (_, i) => (
          <Tabs.Item title={team[0].year - i - 1}>
            Session {teamData.year}
          </Tabs.Item>
        ))}
      </Tabs.Group>
      <>
        <div className="flex flex-col justify-center items-center m-0 mt-10 md:flex-row">
          <HeroCard hero={teamData.president} />
          <HeroCard hero={teamData.vicePresident} />
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
          {teamData.team.map((hero) => (
            <HeroCard hero={hero} />
          ))}
        </div>
      </>
      <UnitModal members={teamData.unitMembers}/>
    </>
  );
};
export default function Team() {
  return (
    <React.Fragment>
      <div className="text-xl">Managerial Team</div>
      <TeamTabs />
    </React.Fragment>
  );
}
