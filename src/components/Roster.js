import React from 'react';

const Roster = ({teams}) => {
    const rosterList = teams.map((team) => {
        return (
            <div key={team.display_name} className="item">
                <div className="content">
                    <div className="header"> {team.first_name} {team.last_name}</div>
                </div>
            </div>
        )
    })

    return (
        <div className='ui inverted segment'>
            <div className="ui inverted relaxed divided list">
                {rosterList}
            </div>
        </div>
    )
};

export default Roster;