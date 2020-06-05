import React from 'react';
import styled from 'styled-components';
import ReactAnimatedWeather from 'react-animated-weather';
import {IconSelector,ConvertTime} from '../assets/Helper';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 160,
    animate: true
};


const WeatherDetailsWrapper = styled.div`
  
  float:center;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
 
  margin: 0 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;

`;

const Detail = styled.div`
flex-basis: calc(100% / 3);
padding: 10px;
font-size:20px;
`


const SmallLabel = styled.h4`
  flex:auto;
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}

`;

const Weather =  (props)=>{

    const minmaxTemp = (min,max,type)=>{
    
        if (type === 'sunrise') {
            return (
                <Detail >
                    <div>Sunrise</div>
                    <div>{ConvertTime(min)}</div>
                    <br/>
                    <div>Sunset</div>
                    <div>{ConvertTime(max)}</div>
                </Detail>
            )
        }
        else if (type==='temp'){
            return (
                <Detail style={{fontSize:'20px'}}>
                    <div>High</div>
                    <div>{max}&deg;</div>
                    <br/>
                    <div>Low</div>
                    <div>{min}&deg;</div>
                    

                </Detail>
            )
        }if(type==='huimidity'){
            return(
                <Detail>
                    <div >Humidity</div>
                    <div>{min}<span>&#37;</span></div>
                    <br></br>
                    <div > Feels like</div>
                    <div>{max}&deg;</div>
                </Detail>   
            )
        }
        
    }
    var date = new Date();
     
    const {items} = props;



    return (
    
            <div className="container textColor"> 
                <div className=" cards py-4">
                    <h3 >{items.city.name}, {items.city.country}</h3>
                    <h3 className="date">{date.toDateString()}</h3>
                </div>
                <div className="container">
                    <div  className="row">
                        <div  className="col-md-6 tempcontainer">
                            <ReactAnimatedWeather
                            icon={IconSelector(items.list[0].weather[0].main)}
                            color={defaults.color}
                            size={defaults.size}
                            animate={defaults.animate}
                                
                            />

                            
                            <div className="col-6" style={{ float:'right' }}>    
                               
                                <span style={{fontSize:'60px'}}>{items.list[0].main.temp}&deg;</span>
                                <br/> 
                                <p style={{fontSize:'30px'}}>{items.list[0].weather[0].description}</p>
                            </div>
                        </div>
                        {/* <div className="col-md-1" style={{borderLeft:'2px solid white',width:0,height:'130px',padding:0}}></div> */}
                        <div  className="col-md-6 wrapper">
                        <WeatherDetailsWrapper  >
                            <SmallLabel  align="center" weight="400">
                                <div >{minmaxTemp(items.list[0].main.temp_min,items.list[0].main.temp_max,'temp')}</div>
                            </SmallLabel>
                            <SmallLabel  align="center" weight="400">
                                <div >{minmaxTemp(items.list[0].main.humidity,items.list[0].main.feels_like,'huimidity')}</div>
                            </SmallLabel>
                            <SmallLabel align="center" weight="400">
                                <div>{minmaxTemp(items.city.sunrise,items.city.sunset,'sunrise')}</div>
                            </SmallLabel>
                        </WeatherDetailsWrapper> 
                        </div>   
                    </div>                   
                </div>          
            </div>
      
    );

    
}


export default Weather;