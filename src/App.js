import React from "react";


import './App.css';
import Weather from "./comps/Weather";
import WeatherNavbar from "./comps/WeatherNavbar";

import Carousel from './comps/Carousel';

import {isDay} from './assets/Helper';






class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      cityName:'tel-aviv',
      items:[],
      isLoaded:false,
      activeItemIndex:0,
      isDay:false
    };

    this.HandleChangeCity = this.HandleChangeCity.bind(this);
    this.onSubmitCity = this.onSubmitCity.bind(this);
  }


  HandleChangeCity(value){
    
    this.setState({cityName:value });
  }

  componentDidMount(){
        

    const { cityName }  = this.state;

    
    this.fetchData(cityName);


  
  }

  fetchData(city){
   
    const url ='http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=46c1e6fa7b5aec3308330d2ba434f560&units=metric&time=utc';
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      
      this.setState({
        cityName:city,
        items:data,
        isLoaded:true

      })
      
      if(isDay(data.city.sunset)){
         this.setState({isDay:true})
      }
      
    })
    .catch(error => alert('incorrect city entering', error))
  }


  onSubmitCity(e){
    e.preventDefault();
   
    this.fetchData(this.state.cityName);
  }






  render(){
    
    const { isLoaded, items } = this.state;
    
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>

        
        <WeatherNavbar 
          onChangeCity = {this.HandleChangeCity}
          onSubmitCity = {this.onSubmitCity}
        />
        
        <Weather 
          items = {items}          
        />
        <br/>
        <Carousel
          items = {items}
        />
      </div>

    );
  }
}



export default App;
