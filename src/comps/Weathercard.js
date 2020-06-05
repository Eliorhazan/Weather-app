import  React from 'react';
import {IconSelector,ConvertTime} from '../assets/Helper';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 30,
  animate: false
};

export class Weathercard extends React.Component{
  getDateCard(date){
    let index = date.indexOf('-');
    let result = date.substring(index+1,date.indexOf(' '));

    return result;

  }
  render() {
    const { item } = this.props;
    
    return (
      <div className='container'>
        
            <div >
              {ConvertTime(item.dt)}
              <br></br>
              <span>{this.getDateCard(item.dt_txt)}</span>
            </div>
            <br></br>
            <div >
            
            <ReactAnimatedWeather
              icon={IconSelector(item.weather[0].main)}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
                            
            />
            </div>
            {item.main.temp}&deg;
            <div>
               
            </div>

        </div>
       
     
    );
  }
}