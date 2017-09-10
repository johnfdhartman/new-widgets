
class APIUtil {
  getWeather (position){
    var request = new XMLHttpRequest();
    const [lat, lon] = [position.coords.latitude,
      position.coords.longitude];
    const key = 'd3c694567aefd4fc21a57f3e856f6038';
    request.open('GET',
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key})`,
    true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
      } else {
        var data = 'error error beep boop';
      }
      console.log(data);
      return data;
    };
  }
}


const Util = new APIUtil ();

module.exports = Util;
