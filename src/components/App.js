import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import options from '../options';
import Roster from './Roster';
import axios from 'axios';


const App = () => {
    const arr = [];
    const [team, setTeam] = useState(arr);
    const [bodyColor, setBodyColor] = useState('white');

    const onTeamClick = async (team, teamColor) => {
        const response = await axios.get(`http://data.nba.net/json/cms/noseason/team/${team}/roster.json`);

        const player = response.data.sports_content.roster.players.player

        setTeam(player); 
        setBodyColor(teamColor);
    }

    useEffect(() => {
        document.body.style.backgroundColor = `${bodyColor}`;
    }, [bodyColor])


    return (
        <div className="ui container">
            <Dropdown
                onTeamClick={onTeamClick}
                options={options}
                placeholder='Select a Team'
            />
            {team === arr ? null : <Roster teams={team} />}
        </div>
    );
};

export default App;