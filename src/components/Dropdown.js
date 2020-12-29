import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ onTeamClick, options, placeholder }) => {
    const [open, setOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(placeholder);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedTeams = options.map((option)=>{
        const pickTeam = () => {
            setSelectedTeam(option.teamName);
            onTeamClick(option.value, option.teamColor);
        }

        return (
            <div 
                onClick={pickTeam} 
                key={option.value} 
                className="item" 
                data-value={option.value}
            >
                {option.teamName}
            </div>
        )
    });

    return (
        <div 
            ref={ref}
            onClick={() => setOpen(!open)} 
            className={`ui fluid selection dropdown ${open ? 'visible active':''} `}
        >
            <input type="hidden" name="user" />
            <i className="dropdown icon"></i>
            <div className={`text ${selectedTeam === placeholder ? 'default': ''}`}>{selectedTeam}</div>
            <div className={`menu ${open ? 'visible transition':''}`}>
                {renderedTeams}
            </div>            
        </div>
    )
};


export default Dropdown;