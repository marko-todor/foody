$(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});


function redirectRestaurant(){

	$restaurantName = document.getElementById("restaurant-name").innerHTML.value;
	switch($restaurantName){
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