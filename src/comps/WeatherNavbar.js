import React from 'react';

const WeatherNavbar = (props) => {
    return(
        <div style={{paddingTop:'40px'}} className='container'>
            <div  className="row ">
                <div className='col-md-6 textColor'>
                    <h1>WEATHER INDEX</h1>
                </div>
                <div className=' col-md-2'>
                    <form onSubmit = {(e) => props.onSubmitCity(e)}>
                       
                        
                        <input 
                            onChange = {(e)=>props.onChangeCity(e.target.value)}
                            className = 'inputcity form-control '
                            type = 'search'
                            autoComplete = 'off'
                            name = 'city'
                            placeholder='Enter city...'
                            
                        />
                        
                 
                         
                    </form>
                </div>
            </div>
        </div>    
    );
}

export default WeatherNavbar;