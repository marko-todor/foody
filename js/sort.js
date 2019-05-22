  function initialize() {
    
	alert("initialize");
	
	
    restaurants = ['manufaktura', 'madera','toro'];
    prices = ['$$', '$$$', '$$'];
    grades = [4.8, 4.77, 4.8];
    htmlText = new Array();
	numOfGrades = [2,2,2];
    
    htmlText[0] = "<div class='row'><div class='col-lg-4'><a href= 'manufaktura.html'><img class='img-fluid' src='../images/top-manufaktura.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='manufaktura.html'> Manufaktura </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Opština: Stari grad<br></li><li class='list-group-item'>Ocena: 4.8<br></li><li class='list-group-item'>Tip kuhinje: Tradicionalna<br></li><li class='list-group-item'>Cena: $$<br></li></ul></div>        </div></div>"

    htmlText[1] = "<div class='row'> <div class='col-lg-4'> <a href= 'madera.html'> <img class='img-fluid' src='../images/top-madera.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='madera.html'> Madera </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Opština: Zvezdara<br></li> <li class='list-group-item'>Ocena: 4.77<br></li> <li class='list-group-item'>Tip kuhinje: Tradicionalna<br></li> <li class='list-group-item'>Cena: $$$<br></li> </ul> </div> </div> </div>"

    htmlText[2] = "<div class='row'> <div class='col-lg-4'> <a href= 'toro.html'> <img class='img-fluid' src='../images/top-toro.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='toro.html'> Toro Latin Gastro Bar </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Opština: Stari grad<br></li> <li class='list-group-item'>Ocena: 4.8<br></li> <li class='list-group-item'>Tip kuhinje: Meksička<br></li> <li class='list-group-item'>Cena: $$<br></li> </ul> </div> </div> </div>"

	localStorage.setItem("loaded", "yes");
	localStorage.setItem("restaurants[0]", restaurants[0]);
	localStorage.setItem("restaurants[1]", restaurants[1]);
	localStorage.setItem("restaurants[2]", restaurants[2]);
	
	localStorage.setItem("prices[0]", prices[0]);
	localStorage.setItem("prices[1]", prices[1]);
	localStorage.setItem("prices[2]", prices[2]);
	
	localStorage.setItem("grades[0]", grades[0]);
	localStorage.setItem("grades[1]", grades[1]);
	localStorage.setItem("grades[2]", grades[2]);
	
	localStorage.setItem("htmlText[0]", htmlText[0]);
	localStorage.setItem("htmlText[1]", htmlText[1]);
	localStorage.setItem("htmlText[2]", htmlText[2]);
	
	localStorage.setItem("numOfGrades[0]", numOfGrades[0]);
	localStorage.setItem("numOfGrades[1]", numOfGrades[1]);
	localStorage.setItem("numOfGrades[2]", numOfGrades[2]);

  }
  
  function load() {
   
   
   
   if(localStorage.getItem("loaded") != "yes")initialize();
    var htmlText = [];
	
	htmlText[0] = localStorage.getItem("htmlText[0]");
	htmlText[1] = localStorage.getItem("htmlText[1]");
	htmlText[2] = localStorage.getItem("htmlText[2]");
   //fill();
   var content=document.getElementById("content");
    content.innerHTML="";
    var string="";
    
    for (i=0;i<htmlText.length;i++){
      string = string+htmlText[i];
      string = string+"<br><hr style='border-top: 5px solid #ccc; background: transparent;'>"
    }
    
    content.innerHTML=string;
   if ('localStorage' in window && window.localStorage !== null) {
    if(!localStorage.getItem('user')) {
     document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='login.html'>Uloguj se</a>";
   } else {
     document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='restaurants.html' onclick = 'logout()'>Izloguj se</a>";
   }
 }
}
function logout() {
 localStorage.removeItem('user');
}


function sortRestaurants() {
	var restaurants = [];
	var prices = [];
	var grades = [];
	var htmlText = [];
	var numOfGrades = [];
	
	restaurants[0] = localStorage.getItem("restaurants[0]");
	restaurants[1] = localStorage.getItem("restaurants[1]");
	restaurants[2] = localStorage.getItem("restaurants[2]");
	
	prices[0] = localStorage.getItem("prices[0]");
	prices[1] = localStorage.getItem("prices[1]");
	prices[2] = localStorage.getItem("prices[2]");
	
	grades[0] = localStorage.getItem("grades[0]");
	grades[1] = localStorage.getItem("grades[1]");
	grades[2] = localStorage.getItem("grades[2]");
	
	htmlText[0] = localStorage.getItem("htmlText[0]");
	htmlText[1] = localStorage.getItem("htmlText[1]");
	htmlText[2] = localStorage.getItem("htmlText[2]");
	
	numOfGrades[0] = localStorage.getItem("numOfGrades[0]");
	numOfGrades[1] = localStorage.getItem("numOfGrades[1]");
	numOfGrades[2] = localStorage.getItem("numOfGrades[2]");

  var name = document.getElementById('sortParameter').value; 
  for (i=0;i<restaurants.length-1;i++){
    for (j=i+1;j<restaurants.length;j++){
      var cond;
      if(name == "Naziv/Rastuće") { cond = restaurants[i].toLowerCase() < restaurants[j].toLowerCase(); }
      if(name == "Naziv/Opadajuće") { cond = restaurants[i].toLowerCase() > restaurants[j].toLowerCase(); }
      if(name == "Ocena/Rastuće") { cond = grades[i] < grades[j]; }
      if(name == "Ocena/Opadajuće") { cond = grades[i] > grades[j]; }
      if(name == "Cena/Rastuće") { cond = prices[i].length < prices[j].length; }
      if(name == "Cena/Opadajuće") { cond = prices[i].length > prices[j].length; }
      if (cond){
        pom=restaurants[i];
        restaurants[i]=restaurants[j];
        restaurants[j]=pom;
        
        pom=prices[i];
        prices[i]=prices[j];
        prices[j]=pom;
        
        pom=grades[i];
        grades[i]=grades[j];
        grades[j]=pom;

        pom=htmlText[i];
        htmlText[i]=htmlText[j];
        htmlText[j]=pom;
		
		pom=numOfGrades[i];
        numOfGrades[i]=numOfGrades[j];
        numOfGrades[j]=pom;
      }
    }
  }
  
  var content=document.getElementById("content");
    content.innerHTML="";
    var string="";
    
    for (i=0;i<htmlText.length;i++){
      string = string+htmlText[i];
      string = string+"<br><hr style='border-top: 5px solid #ccc; background: transparent;'>"
    }
    
    content.innerHTML=string;
 
	localStorage.setItem("restaurants[0]", restaurants[0]);
	localStorage.setItem("restaurants[1]", restaurants[1]);
	localStorage.setItem("restaurants[2]", restaurants[2]);
	
	localStorage.setItem("prices[0]", prices[0]);
	localStorage.setItem("prices[1]", prices[1]);
	localStorage.setItem("prices[2]", prices[2]);
	
	localStorage.setItem("grades[0]", grades[0]);
	localStorage.setItem("grades[1]", grades[1]);
	localStorage.setItem("grades[2]", grades[2]);
	
	localStorage.setItem("htmlText[0]", htmlText[0]);
	localStorage.setItem("htmlText[1]", htmlText[1]);
	localStorage.setItem("htmlText[2]", htmlText[2]);
	
	localStorage.setItem("numOfGrades[0]", numOfGrades[0]);
	localStorage.setItem("numOfGrades[1]", numOfGrades[1]);
	localStorage.setItem("numOfGrades[2]", numOfGrades[2]);
  }
  function fill(){
    
    var content=document.getElementById("content");
    content.innerHTML="";
    var string="";
    
    for (i=0;i<htmlText.length;i++){
      string = string+htmlText[i];
      string = string+"<br><hr style='border-top: 5px solid #ccc; background: transparent;'>"
    }
    
    content.innerHTML=string;
    
  }	