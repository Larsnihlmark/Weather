//Date and Time

const timeDateElement = document.querySelector(".timeDate");
const timeDateElementRight = document.querySelector(".timeDate-right");
const timeDateElementLeft = document.querySelector(".timeDate-left");

const getCurrentTimeDate = () => {
    var currentTimeDate = new Date();
    var hours  =  currentTimeDate.getHours();
    var hoursLondon   =  currentTimeDate.getHours() -1;
    var hoursBangkok   =  currentTimeDate.getHours() +5;

    var minutes =  currentTimeDate.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        var AMPM = hours >= 12 ? 'PM' : 'AM';
        

        if(hours === 12){
            hours = 12;
            hoursLondon = 12
            hoursBangkok = 12
        }else{

            hours = hours%12;
            hoursLondon = hoursLondon%12
            hoursBangkok = hoursBangkok%12
        }
        var currentTime = `${hours}:${minutes}${AMPM}`;
        var currentTimeLondon =  `${hoursLondon}:${minutes}${AMPM}`      
        var currentTimeBangkok =  `${hoursBangkok}:${minutes}${AMPM}`      
                    
        timeDateElement.innerHTML = currentTime;
        timeDateElementRight.innerHTML = currentTimeLondon;
        timeDateElementLeft.innerHTML = currentTimeBangkok;

        setTimeout(getCurrentTimeDate, 500);
        


    }
getCurrentTimeDate();