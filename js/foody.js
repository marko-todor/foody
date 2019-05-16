// $(':radio').change(function() {
//   console.log('New star rating: ' + this.value);
// });

function redirectRestaurant(){

	var restaurantName = document.nameSearch.restaurantName.value;
	var name = restaurantName.toLowerCase();

	switch(name){
		case 'manufaktura' : {
			window.open("pages/manufaktura.html");
			break;
		}
		case 'madera' : {
			window.open("pages/madera.html");
			break;
		}
		case 'toro' : {
			window.open("pages/toro.html");
			break;
		}
	}

}

function fillUsers() {
			if ('localStorage' in window && window.localStorage !== null) {
				localStorage.setItem("ana-dimi", "ana123");
				localStorage.setItem("markotod", "marko123");
				if(!localStorage.getItem('user')) {
					document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='pages/login.html'>Uloguj se</a>";
				} else {
					document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='index.html' onclick = 'logout()'>Izloguj se</a>";
				}
			}
			
}

function login(){
				if ('localStorage' in window && window.localStorage !== null) {
					if(document.myform.username.value == ""){
						alert("Niste uneli korisnicko ime");
						return;
					}
					if(document.myform.password.value == ""){
						alert("Niste uneli lozinku");
						return;
					}
					for(i=0; i<localStorage.length; i++){
								if(localStorage.key(i)==document.myform.username.value){
									if(localStorage.getItem(localStorage.key(i))==document.myform.password.value){
										localStorage.setItem('user',document.myform.username.value);
										window.open("../index.html");
										return;
									}
								}
					}
					alert("Neuspesno logovanje");
				} else { alert("Fali local storage");}
}
			
function register() {
				if ('localStorage' in window && window.localStorage !== null) {
					if(document.registrationForm.username.value == ""){
						alert("Niste uneli korisnicko ime");
						return;
					}
					if(document.registrationForm.password.value == ""){
						alert("Niste uneli lozinku");
						return;
					}
					for(i=0; i<localStorage.length; i++){
								if(localStorage.key(i)==document.registrationForm.username.value){
									alert("Već postojeći username");
								}
					}
					localStorage.setItem(document.registrationForm.username.value, document.registrationForm.password.value);
				}
}

function logout() {
			localStorage.removeItem('user');
}

