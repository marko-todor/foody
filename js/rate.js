function rate(restaurant, newGrade) {

	var restaurants = [];

	restaurants[0] = localStorage.getItem("restaurants[0]");
	restaurants[1] = localStorage.getItem("restaurants[1]");
	restaurants[2] = localStorage.getItem("restaurants[2]");
	
	var i;
	var j;
	for(i = 0; i < restaurants.length; i++) {
		if(restaurant == restaurants[i]) {
			num = localStorage.getItem("numOfGrades[" + i + "]") - 0;
			oldGrade = localStorage.getItem("grades[" + i + "]") - 0;
			j = i;
		}
	}
	newRating = (oldGrade*num + newGrade)/(num + 1);
	num = num + 1;
	
	localStorage.setItem("numOfGrades[" + j + "]", num);
	localStorage.setItem("grades[" + j + "]", newRating);
	
	var toUpdate = "rating" + restaurant;
	document.getElementById(toUpdate).innerHTML = newRating;
	
}