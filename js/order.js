 function order() {
		
		var i;
		for(i=0; i<document.menu.length; i++) {
			
			var id = i+1;
			
			if (document.menu[i].checked) {
				
				var item = "item"+id;
				var img = "img"+id; 
				var desc = "desc"+id;  	
				var price = "price"+id;
		
				localStorage.setItem("orderFormItem"+id,document.getElementById(item).innerHTML);
				localStorage.setItem("orderFormDesc"+id,document.getElementById(desc).innerHTML);
				localStorage.setItem("orderFormImg"+id,document.getElementById(img).src);
				localStorage.setItem("orderFormPrice"+id, document.getElementById(price).innerHTML);
				
				
			}
			
			else {
				
				localStorage.setItem("orderFormItem"+id,null);
				localStorage.setItem("orderFormDesc"+id,null);
				localStorage.setItem("orderFormImg"+id,null);
				localStorage.setItem("orderFormPrice"+id,null);
				
			}
			
		}
		
		
		

    	window.open("order-form.html")
    }
