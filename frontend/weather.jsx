import React from 'react';
class Weather extends React.Component{
  constructor() {
    super();
    this.state = {
      weather: null
    };
  }

  componentDidMount () {
    this.weather = navigator.geolocation.getCurrentPosition((position) =>
      this.getWeather(position));
  }



  render() {
    var content = 'loading';

    if (this.state.weather) {
      content = (
        <div className='table'>
          <div className='table-row table-header'>
            <div className="table-row-item">City </div>
            <div className="table-row-item">Temperature</div>
          </div>
          <div className='table-row'>
            <div className='table-row-item' data-header='city'>
              {this.state.weather.name}
            </div>
            <div className='table-row-item' data-header='temperature'>
              {Math.round(
                (this.state.weather.main.temp - 273)*10
              )/10}&#176;C
            </div>
          </div>
        </div>
      );
    }
    return (
      <div id='weather' className='widget'>
        {content}
      </div>
    );

  }

  getWeather (position){
    var request = new XMLHttpRequest();
    const coords = [position.coords.latitude,
      position.coords.longitude];
    const key = '428d73b7e4e21362ccf1744319654313';
    let url = 'http://api.openweathermap.org/data/2.5/weather';

    const apiCall = url + `?lat=${coords[0]}` + `&lon=${coords[1]}` +
     `&APPID=${key}`;
    console.log(apiCall);
    request.onreadystatechange = () => {
        if (request.status === 200 &&
          request.readyState === XMLHttpRequest.DONE) {
          var data = JSON.parse(request.responseText);
          this.setState({weather: data});
        }
      };
    request.open('GET',
    apiCall,
    true);
    request.send();
  }
}


export default Weather;
