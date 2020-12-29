import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//This project will be a website with a dropdown menu to select an NBA team name. Once you select the team name, it will change the background color to the team's primary color and display the team roster.

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);