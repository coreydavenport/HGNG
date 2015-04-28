
    function generator(){
      
      
      var wordlist1 = ["Sad","Adi","Cyber","Magic","Micro","Aero","Future","HyperSport","White","Bio","Godidas","Hydrator","Baby","Golden","Silver","Hydra", "Lyte", "Dead",
              "Blaqk","Dark","Black", "Under", "Speed","Jog","Little","Advanced","OXY","Energy", "Supra","Night","HyPerFlex","Tech","Pro","Plastic"]
      
      var wordlist2 = ["Knife","Prosthesia","Android","Widow","Runner","Fades","LTD",
              "Air","Bullet","Tear","Foot","Hand","Psych","Face","Deth", "God", "Metal","tech","no.","Flex", "Anaesthetics","Nothing","Walker","Lite"]
      
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
