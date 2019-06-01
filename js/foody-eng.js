// $(':radio').change(function() {
//   console.log('New star rating: ' + this.value);
// });

function redirectRestaurant(){

	var restaurantName = document.nameSearch.restaurantName.value;
	var name = restaurantName.toLowerCase();

	switch(name){
		case 'manufaktura' : {
			window.open("eng/manufaktura.html");
			break;
		}
		case 'madera' : {
			window.open("eng/madera.html");
			break;
		}
		case 'toro' : {
			window.open("eng/toro.html");
			break;
		}
		case 'terminal' : {
			window.open("eng/terminal.html");
			break;
		}
		case 'smokvica' : {
			window.open("eng/smokvica.html");
			break;
		}
	}

}

function redirectType(){

	var selection = document.getElementById("foodSearch");
	var type = selection.options[selection.selectedIndex].value;
	

	switch(type){
		case 'Chinese' : {
			window.open("eng/chinese.html");
			break;
		}
		case 'Traditional' : {
			window.open("eng/traditional.html");
			break;
		}
		case 'Mexican' : {
			window.open("eng/mexican.html");
			break;
		}
		case 'Italian' : {
			window.open("eng/italian.html");
			break;
		}
	}

}


function fillUsers() {
			if ('localStorage' in window && window.localStorage !== null) {
				localStorage.setItem("ana-dimi", "ana123");
				localStorage.setItem("markotod", "marko123");
				if(!localStorage.getItem('user')) {
					document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='eng/login.html'>Log in</a>";
				} else {
					document.getElementById('loginText').innerHTML = "<a class='nav-link' href ='index.html' onclick = 'logout()'>Log out</a>";
				}
			}
			if(localStorage.getItem("loaded") != "yes")initialize();
}


function login(){
				if ('localStorage' in window && window.localStorage !== null) {
					if(document.myform.username.value == ""){
						alert("You did not enter username");
						return;
					}
					if(document.myform.password.value == ""){
						alert("You did not enter password");
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
					alert("Invalid login");
				} else { alert("Local storage missing");}
}
			
function register() {
				if ('localStorage' in window && window.localStorage !== null) {
					if(document.registrationForm.username.value == ""){
						alert("You did not enter username");
						return;
					}
					if(document.registrationForm.password.value == ""){
						alert("You did not enter password");
						return;
					}
					for(i=0; i<localStorage.length; i++){
								if(localStorage.key(i)==document.registrationForm.username.value){
									alert("Username already taken");
								}
					}
					localStorage.setItem(document.registrationForm.username.value, document.registrationForm.password.value);
				}
}

function logout() {
			localStorage.removeItem('user');
}

