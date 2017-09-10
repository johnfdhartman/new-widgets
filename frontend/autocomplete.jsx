import React from 'react';



class Autocomplete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputVal: '',
      matches: []
    };
  }


  render () {
    const searchNames = this.searchNames;
    const listNames = this.state.matches.map( (name) =>
      <li>{name}</li>
    );
    return (
      <div id='Autocomplete'>
        <input type='text' onChange={this.searchNames.bind(this)}/>
        <ul>
          {this.state.matches}
        </ul>
      </div>
    );
  }


  searchNames (event) {
    this.setState({inputVal: event.target.value});
    let inputVal = this.state.inputVal;
    let names = this.props.names;
    let matches = [];
    // console.log('halp');
    for (let i = 0; i < names.length; i++) {
      // console.log(names[i]);
      let nameStart = names[i].slice(0, inputVal.length);
      if (nameStart === inputVal) {
        // console.log(nameStart, names[i]);
        matches.push(names[i]);
      }
    }
    this.setState({matches: matches});
    console.log(this.state.matches, matches);
  }
}

export default Autocomplete;
