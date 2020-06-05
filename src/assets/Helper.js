export function ConvertTime (time)   {
    let unix_timestamp = time;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();


    // Will display time in 10:30 format
    var formattedTime = hours + ':' + minutes.substr(-2) ;

    return formattedTime;
}

export function isDay(_sunset){
    var nowDate =  new Date();
    let sunset = ConvertTime(_sunset);
    let time = nowDate.getHours() +':'+ nowDate.getMinutes();

    if(sunset>time)
        return true;
    return false;
    
}
export function IconSelector(main,sunset) {    
    let weatherIcon = null;

    if (main === 'Thunderstorm') {
    weatherIcon = 'RAIN';
    } else if (main === 'Drizzle') {
    weatherIcon = 'RAIN';
    } else if (main === 'Rain') {
    weatherIcon = 'RAIN'
    } else if (main === 'Snow') {
    weatherIcon = 'SNOW'
    } else if (main === 'Clear') {
        if(isDay(sunset)) {       
            weatherIcon = 'CLEAR_DAY';
            
        }
        else{
            weatherIcon = 'CLEAR_NIGHT'

        }    
    } else if (main === 'Clouds') {
             weatherIcon = 'CLOUDY';
    } else {
    weatherIcon ='FOG';
    }
    return weatherIcon;
}
