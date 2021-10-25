//Date and Time

const timeDateElement = document.querySelector(".timeDate");

const getCurrentTimeDate = () => {
    var currentTimeDate = new Date();
    var hours   =  currentTimeDate.getHours();

    var minutes =  currentTimeDate.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        var AMPM = hours >= 12 ? 'PM' : 'AM';

        if(hours === 12){
            hours=12;

        }else{

            hours = hours%12;

        }
        var currentTime = `${hours}:${minutes}${AMPM}`;
                
                    
        timeDateElement.innerHTML = currentTime;

        setTimeout(getCurrentTimeDate, 500);
        


    }
getCurrentTimeDate();