import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputVal: '',
        };
  }


  render () {
    // const searchNames = this.searchNames;
    // const listNames = this.state.matches.map( (name) =>
    //   <li>{name}</li>
    // );
    return (
      <div id='autocomplete' className='widget'>
        <input type='text' onChange={this.changeInputVal.bind(this)}/>
        <ul>
          <ReactCSSTransitionGroup
            id='auto-transition-group'
            transitionName='auto'
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>
            {this.searchNames.bind(this)()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }

  changeInputVal(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  searchNames () {
    let names = [];
    for (let i = 0; i < this.props.names.length; i++) {
      let slice = this.props.names[i].slice(0, this.state.inputVal.length);
      if (slice.toUpperCase() === this.state.inputVal.toUpperCase()) {
        names.push(this.props.names[i]);
      }
    }
    return (
      names.map( (name) =>
        <li key={name}>
          {name}
        </li>
      )
    );
  }

}

export default Autocomplete;
