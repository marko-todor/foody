  function initialize() {
    
	//alert("initialize");
	
	
    restaurants = ['manufaktura', 'madera','toro', 'terminal', 'smokvica'];
    prices = ['$$', '$$$', '$$', '$$$', '$$'];
    grades = [4.8, 4.77, 4.8, 4.5, 3.9];
    htmlText = new Array();
	htmlTextEng = new Array();
	numOfGrades = [2,2,2,2,2];
    
    htmlText[0] = "<div class='row'><div class='col-lg-4'><a href= 'manufaktura.html'><img class='img-fluid' src='../images/top-manufaktura.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='manufaktura.html'> Manufaktura </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Opština: Stari grad<br></li><li class='list-group-item'>Ocena: 4.8<br></li><li class='list-group-item'>Tip kuhinje: Tradicionalna<br></li><li class='list-group-item'>Cena: $$<br></li></ul></div></div></div>"

    htmlText[1] = "<div class='row'> <div class='col-lg-4'> <a href= 'madera.html'> <img class='img-fluid' src='../images/top-madera.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='madera.html'> Madera </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Opština: Zvezdara<br></li> <li class='list-group-item'>Ocena: 4.77<br></li> <li class='list-group-item'>Tip kuhinje: Tradicionalna<br></li> <li class='list-group-item'>Cena: $$$<br></li> </ul> </div> </div> </div>"

    htmlText[2] = "<div class='row'> <div class='col-lg-4'> <a href= 'toro.html'> <img class='img-fluid' src='../images/top-toro.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='toro.html'> Toro Latin Gastro Bar </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Opština: Stari grad<br></li> <li class='list-group-item'>Ocena: 4.8<br></li> <li class='list-group-item'>Tip kuhinje: Meksička<br></li> <li class='list-group-item'>Cena: $$<br></li> </ul> </div> </div> </div>"

	htmlText[3] = "<div class='row'><div class='col-lg-4'><a href= 'terminal.html'><img class='img-fluid' src='../images/top-terminal.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='terminal.html'> Terminal </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Opština: Vračar <br></li><li class='list-group-item'> Ocena: 4.5 <br></li><li class='list-group-item'>Tip kuhinje: Kineski <br></li><li class='list-group-item'>Cena: $$$<br></li></ul></div></div></div>"

	htmlText[4] = "<div class='row'><div class='col-lg-4'><a href= 'smokvica.html'><img class='img-fluid' src='../images/top-smokvica.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='smokvica.html'> Smokvica </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Opština: Dorćol <br></li><li class='list-group-item'> Ocena: 3.9 <br></li><li class='list-group-item'>Tip kuhinje: Italijanska <br></li><li class='list-group-item'>Cena: $$<br></li></ul></div></div></div>"
	
	htmlTextEng[0] = "<div class='row'><div class='col-lg-4'><a href= 'manufaktura.html'><img class='img-fluid' src='../images/top-manufaktura.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='manufaktura.html'> Manufaktura </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Municipality: Old town<br></li><li class='list-group-item'>Rating: 4.8<br></li><li class='list-group-item'>Type of kitchen: Tradicionalna<br></li><li class='list-group-item'>Price range: $$<br></li></ul></div>        </div></div>"

    htmlTextEng[1] = "<div class='row'> <div class='col-lg-4'> <a href= 'madera.html'> <img class='img-fluid' src='../images/top-madera.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='madera.html'> Madera </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Municipality: Zvezdara<br></li> <li class='list-group-item'>Rating: 4.77<br></li> <li class='list-group-item'>Type of kitchen: Tradicionalna<br></li> <li class='list-group-item'>Price range: $$$<br></li> </ul> </div> </div> </div>"

    htmlTextEng[2] = "<div class='row'> <div class='col-lg-4'> <a href= 'toro.html'> <img class='img-fluid' src='../images/top-toro.jpg'> </a> <br><br> </div> <div class='col-lg-8'> <div class='card' style='100%'> <div class='card-body'> <h5 class='card-title'><a href='toro.html'> Toro Latin Gastro Bar </a></h5> </div> <ul class='list-group list-group-flush'> <li class='list-group-item'>Municipality: Old town<br></li> <li class='list-group-item'>Rating: 4.8<br></li> <li class='list-group-item'>Type of kitchen: Meksička<br></li> <li class='list-group-item'>Price range: $$<br></li> </ul> </div> </div> </div>"

	htmlTextEng[3] = "<div class='row'><div class='col-lg-4'><a href= 'terminal.html'><img class='img-fluid' src='../images/top-terminal.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='terminal.html'> Terminal </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Municipality: Vracar <br></li><li class='list-group-item'> Rating: 4.5 <br></li><li class='list-group-item'>Type of kitchen: Chinese <br></li><li class='list-group-item'>Price range: $$$<br></li></ul></div></div></div>"

	htmlTextEng[4] = "<div class='row'><div class='col-lg-4'><a href= 'smokvica.html'><img class='img-fluid' src='../images/top-smokvica.jpg'></a><br><br></div><div class='col-lg-8'><div class='card' style='100%'><div class='card-body'><h5 class='card-title'><a href='smokvica.html'> Smokvica </a></h5></div><ul class='list-group list-group-flush'><li class='list-group-item'>Municipality: Dorcol <br></li><li class='list-group-item'> Rating: 3.9 <br></li><li class='list-group-item'>Type of kitchen: Italian <br></li><li class='list-group-item'>Price range: $$<br></li></ul></div></div></div>"

	
	localStorage.setItem("loaded", "yes");
	localStorage.setItem("restaurants[0]", restaurants[0]);
	localStorage.setItem("restaurants[1]", restaurants[1]);
	localStorage.setItem("restaurants[2]", restaurants[2]);
	localStorage.setItem("restaurants[3]", restaurants[3]);
	localStorage.setItem("restaurants[4]", restaurants[4]);
	
	localStorage.setItem("prices[0]", prices[0]);
	localStorage.setItem("prices[1]", prices[1]);
	localStorage.setItem("prices[2]", prices[2]);
	localStorage.setItem("prices[3]", prices[3]);
	localStorage.setItem("prices[4]", prices[4]);
	
	localStorage.setItem("grades[0]", grades[0]);
	localStorage.setItem("grades[1]", grades[1]);
	localStorage.setItem("grades[2]", grades[2]);
	localStorage.setItem("grades[3]", grades[3]);
	localStorage.setItem("grades[4]", grades[4]);
	
	localStorage.setItem("htmlText[0]", htmlText[0]);
	localStorage.setItem("htmlText[1]", htmlText[1]);
	localStorage.setItem("htmlText[2]", htmlText[2]);
	localStorage.setItem("htmlText[3]", htmlText[3]);
	localStorage.setItem("htmlText[4]", htmlText[4]);
	
	localStorage.setItem("htmlText-eng[0]", htmlTextEng[0]);
	localStorage.setItem("htmlText-eng[1]", htmlTextEng[1]);
	localStorage.setItem("htmlText-eng[2]", htmlTextEng[2]);
	localStorage.setItem("htmlText-eng[3]", htmlTextEng[3]);
	localStorage.setItem("htmlText-eng[4]", htmlTextEng[4]);
	
	localStorage.setItem("numOfGrades[0]", numOfGrades[0]);
	localStorage.setItem("numOfGrades[1]", numOfGrades[1]);
	localStorage.setItem("numOfGrades[2]", numOfGrades[2]);
	localStorage.setItem("numOfGrades[3]", numOfGrades[3]);
	localStorage.setItem("numOfGrades[4]", numOfGrades[4]);

  }
  
  function load(eng) { // 0 - srb, 1 - eng
      
   
   if(localStorage.getItem("loaded") != "yes")initialize();
    var htmlText = [];
	if(eng == 0){
	htmlText[0] = localStorage.getItem("htmlText[0]");
	htmlText[1] = localStorage.getItem("htmlText[1]");
	htmlText[2] = localStorage.getItem("htmlText[2]");
	htmlText[3] = localStorage.getItem("htmlText[3]");
	htmlText[4] = localStorage.getItem("htmlText[4]");
	} else if (eng == 1) {
	htmlText[0] = localStorage.getItem("htmlText-eng[0]");
	htmlText[1] = localStorage.getItem("htmlText-eng[1]");
	htmlText[2] = localStorage.getItem("htmlText-eng[2]");
	htmlText[3] = localStorage.getItem("htmlText-eng[3]");
	htmlText[4] = localStorage.getItem("htmlText-eng[4]");
	}
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
	 if(eng == 0) {
     document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='login.html'>Uloguj se</a>";
	 } else if(eng == 1) {
	 document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='login.html'>Log in</a>";
	 }
   } else {
	 if(eng == 0) {
     document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='restaurants.html' onclick = 'logout()'>Izloguj se</a>";
	 } else if (eng == 1) {
	 document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='restaurants.html' onclick = 'logout()'>Log out</a>";
	 }		 
   }
 }
}
function logout() {
 localStorage.removeItem('user');
}


function sortRestaurants(eng) {
	var restaurants = [];
	var prices = [];
	var grades = [];
	var htmlText = [];
	var htmlTextEng = [];
	var numOfGrades = [];
	
	restaurants[0] = localStorage.getItem("restaurants[0]");
	restaurants[1] = localStorage.getItem("restaurants[1]");
	restaurants[2] = localStorage.getItem("restaurants[2]");
	restaurants[3] = localStorage.getItem("restaurants[3]");
	restaurants[4] = localStorage.getItem("restaurants[4]");
	
	prices[0] = localStorage.getItem("prices[0]");
	prices[1] = localStorage.getItem("prices[1]");
	prices[2] = localStorage.getItem("prices[2]");
	prices[3] = localStorage.getItem("prices[3]");
	prices[4] = localStorage.getItem("prices[4]");
	
	grades[0] = localStorage.getItem("grades[0]");
	grades[1] = localStorage.getItem("grades[1]");
	grades[2] = localStorage.getItem("grades[2]");
	grades[3] = localStorage.getItem("grades[3]");
	grades[4] = localStorage.getItem("grades[4]");
	
	htmlText[0] = localStorage.getItem("htmlText[0]");
	htmlText[1] = localStorage.getItem("htmlText[1]");
	htmlText[2] = localStorage.getItem("htmlText[2]");
	htmlText[3] = localStorage.getItem("htmlText[3]");
	htmlText[4] = localStorage.getItem("htmlText[4]");
	
	htmlTextEng[0] = localStorage.getItem("htmlText-eng[0]");
	htmlTextEng[1] = localStorage.getItem("htmlText-eng[1]");
	htmlTextEng[2] = localStorage.getItem("htmlText-eng[2]");
	htmlTextEng[3] = localStorage.getItem("htmlText-eng[3]");
	htmlTextEng[4] = localStorage.getItem("htmlText-eng[4]");
	
	numOfGrades[0] = localStorage.getItem("numOfGrades[0]");
	numOfGrades[1] = localStorage.getItem("numOfGrades[1]");
	numOfGrades[2] = localStorage.getItem("numOfGrades[2]");
	numOfGrades[3] = localStorage.getItem("numOfGrades[3]");
	numOfGrades[4] = localStorage.getItem("numOfGrades[4]");

  var name = document.getElementById('sortParameter').value; 
  for (i=0;i<restaurants.length-1;i++){
    for (j=i+1;j<restaurants.length;j++){
      var cond;
	  
	  if(eng == 0){
      if(name == "Naziv/Rastuće") { cond = restaurants[i].toLowerCase() > restaurants[j].toLowerCase(); }
      if(name == "Naziv/Opadajuće") { cond = restaurants[i].toLowerCase() < restaurants[j].toLowerCase(); }
      if(name == "Ocena/Rastuće") { cond = parseFloat(grades[i]) > parseFloat(grades[j]); }
      if(name == "Ocena/Opadajuće") { cond = parseFloat(grades[i]) < parseFloat(grades[j]); }
      if(name == "Cena/Rastuće") { cond = prices[i].length > prices[j].length; }
      if(name == "Cena/Opadajuće") { cond = prices[i].length < prices[j].length; }
	  } else if(eng == 1) {
		  if(name == "Name/Ascending") { cond = restaurants[i].toLowerCase() > restaurants[j].toLowerCase(); }
		  if(name == "Name/Descending") { cond = restaurants[i].toLowerCase() < restaurants[j].toLowerCase(); }
		  if(name == "Rating/Ascending") { cond = parseFloat(grades[i]) > parseFloat(grades[j]); }
		  if(name == "Rating/Descending") { cond = parseFloat(grades[i]) < parseFloat(grades[j]); }
		  if(name == "Price range/Ascending") { cond = prices[i].length > prices[j].length; }
		  if(name == "Price range/Descending") { cond = prices[i].length < prices[j].length; }
	  }
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
		
		pom=htmlTextEng[i];
        htmlTextEng[i]=htmlTextEng[j];
        htmlTextEng[j]=pom;
		
		pom=numOfGrades[i];
        numOfGrades[i]=numOfGrades[j];
        numOfGrades[j]=pom;
      }
    }
  }
  
  var content=document.getElementById("content");
    content.innerHTML="";
    var string="";
   
   if(eng == 0) {
    for (i=0;i<htmlText.length;i++){
      string = string+htmlText[i];
      string = string+"<br><hr style='border-top: 5px solid #ccc; background: transparent;'>"
    }
   } else if(eng == 1) {
	  for (i=0;i<htmlText.length;i++){
      string = string+htmlTextEng[i];
      string = string+"<br><hr style='border-top: 5px solid #ccc; background: transparent;'>"
    }
   }
    
    content.innerHTML=string;
 
	localStorage.setItem("restaurants[0]", restaurants[0]);
	localStorage.setItem("restaurants[1]", restaurants[1]);
	localStorage.setItem("restaurants[2]", restaurants[2]);
	localStorage.setItem("restaurants[3]", restaurants[3]);
	localStorage.setItem("restaurants[4]", restaurants[4]);
	
	localStorage.setItem("prices[0]", prices[0]);
	localStorage.setItem("prices[1]", prices[1]);
	localStorage.setItem("prices[2]", prices[2]);
	localStorage.setItem("prices[3]", prices[3]);
	localStorage.setItem("prices[4]", prices[4]);
	
	localStorage.setItem("grades[0]", grades[0]);
	localStorage.setItem("grades[1]", grades[1]);
	localStorage.setItem("grades[2]", grades[2]);
	localStorage.setItem("grades[3]", grades[3]);
	localStorage.setItem("grades[4]", grades[4]);
	
	localStorage.setItem("htmlText[0]", htmlText[0]);
	localStorage.setItem("htmlText[1]", htmlText[1]);
	localStorage.setItem("htmlText[2]", htmlText[2]);
	localStorage.setItem("htmlText[3]", htmlText[3]);
	localStorage.setItem("htmlText[4]", htmlText[4]);
	
	localStorage.setItem("htmlText-eng[0]", htmlTextEng[0]);
	localStorage.setItem("htmlText-eng[1]", htmlTextEng[1]);
	localStorage.setItem("htmlText-eng[2]", htmlTextEng[2]);
	localStorage.setItem("htmlText-eng[3]", htmlTextEng[3]);
	localStorage.setItem("htmlText-eng[4]", htmlTextEng[4]);
	
	localStorage.setItem("numOfGrades[0]", numOfGrades[0]);
	localStorage.setItem("numOfGrades[1]", numOfGrades[1]);
	localStorage.setItem("numOfGrades[2]", numOfGrades[2]);
	localStorage.setItem("numOfGrades[3]", numOfGrades[3]);
	localStorage.setItem("numOfGrades[4]", numOfGrades[4]);
	
  }
 