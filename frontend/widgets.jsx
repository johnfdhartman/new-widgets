import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.getElementById('main');
  ReactDOM.render(<Root />, mainDiv);
  console.log('mainDiv ', mainDiv);
  }
);

class Root extends React.Component {


  render() {
    // const clock = new Clock();
    return (<div>
       <Clock />
       <Weather />
       <Autocomplete names={Names}/>
       </div>);
  }
}
