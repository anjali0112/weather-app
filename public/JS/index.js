
if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function(position){
        document.querySelector("body").style.visibility = 'visible';
        console.log("index.js");
      });   
  }



