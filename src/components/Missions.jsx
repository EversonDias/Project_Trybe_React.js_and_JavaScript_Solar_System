import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div
        className="bg-slate-600/[.30] p-1 w-4/5 mt-[50px]
      rounded-md m-auto"
        data-testid="missions"
      >
        <Title headline="Missões" />
        <div className="flex flex-wrap justify-center">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
