
  function calculateWeight(){
      var jage = parseInt(document.getElementById("age").value);
      var jweight = parseInt(document.getElementById("weight").value);
      console.log(typeof(jage));
      console.log(typeof(jweight));
    
      if(jage>=5 && jage<=7){
          if(jweight<=20 && jweight>=15){
             document.getElementById("class").innerHTML="Fit";
          }
          else if(jweight<15){
              document.getElementById("class").innerHTML="underweight";
          }
          else{
              document.getElementById('class').innerHTML="overweight";
          }
      }
      else if(jage>=8 && jage<=10){
          if(jweight<=25 && jweight>=21){
              document.getElementById("class").innerHTML="Fit";
          }
          else if(jweight<21){
            document.getElementById("class").innerHTML="underweight";
          }
          else{
            document.getElementById('class').innerHTML="overweight";
 }
      }
      else if (jage>=11 && jage<=15){
          if(jweight<=30 && jweight>=26){
            document.getElementById("class").innerHTML="Fit";
          }
          else if(jweight<26){
            document.getElementById("class").innerHTML="underweight";
          }
          else{
            document.getElementById('class').innerHTML="overweight";
          }
      }       
      else if(jage>=16 && jage<=20){
          if(jweight<=40 && jweight>=31){
            document.getElementById("class").innerHTML="Fit";
          }
          else if(jweight<31){
          
            document.getElementById("class").innerHTML="underweight";
          }
          else{
            document.getElementById('class').innerHTML="overweight";
      
          }

      } else{
        document.getElementById('class').innerHTML="Input valid ";
      }
    }