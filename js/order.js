 function order(id) {
		
		var item = "item"+id;
		var img = "img"+id; 
		var desc = "desc"+id;  	
		var price = "price"+id;
		
		localStorage.setItem("orderFormItem",document.getElementById(item).innerHTML);
    	localStorage.setItem("orderFormDesc",document.getElementById(desc).innerHTML);
    	localStorage.setItem("orderFormImg",document.getElementById(img).src);
    	localStorage.setItem("orderFormPrice", document.getElementById(price).innerHTML);

    	window.open("order-form.html")
    }
