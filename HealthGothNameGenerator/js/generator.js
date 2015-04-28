
  /*  Online Name Generators v.1.0 script is  made by Niels Gamborg webmaster at online-generator.com.  
  *    The script is  free (as in "free speech" and also as in "free beer") in anyway. Use it after you own likings.
  *    Peace and love. :)
  */  
    function generator(){
      // Add your own words to the wordlist. Be carefull to obey the showed syntax
      
      var wordlist1 = ["Sad","Adi","Cyber","Magic","Micro","Aero","Future","HyperSport",
              "White","Bio","Godidas","Hydrator","Baby","Golden","Silver"];
      
      var wordlist2 = ["Knife","Prosthesia","Android","Widow","Runner","Eagle","Tiger",
              "Rocket","Bullet","Knee","Foot","Hand"]
      
      // Random numbers are made 
      var randomNumber1 = parseInt(Math.random() * wordlist1.length);
      var randomNumber2 = parseInt(Math.random() * wordlist2.length);
      var name = wordlist1[randomNumber1] + " " + wordlist2[randomNumber2];     
      
      //alert(name); //Remove first to slashes to alert the name
      
      //If there's already a name it is removed  
      if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
      }
      // A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
      var element = document.createElement("div");
      element.setAttribute("id", "result");
      element.appendChild(document.createTextNode(name));
      document.getElementById("placeholder").appendChild(element);
    }   
