$(document).ready(function(){
	var $dinos = $('#dinos');
	var $name = $('#name');
	var $icon = $('#icon');
	
	function addDino(dino){
	    $dinos.append('<li class="dino">Name: '+dino.name+', URL: '+dino.icon+'</li>');
	}
	
	// read data from JSON
	$.ajax({
	    type: 'GET',
	    url: 'data/dinos.json',
	    success: function(dinos){
	        $.each(dinos, function(i, dino) {
	        	console.log(dino);
	            addDino(dino);  
			});
	    },
	    error: function(){
	        alert('could not load data!!!');
	    }
	});
	
	// add new order
//	$('#add-order').on("click", function() {
//	    var order = {
//	      name:  $name.val(),
//	      drink: $icon.val(),
//	    };
//	    
//	    $.ajax({
//	        type:'POST',
//	        
//	        async: true,
//	        
//	        url: 'data/orders.json',
//	        data: order,
//	        
//	        dataType: "json",
//	        //contentType: "application/json; charset=utf-8",
//	        contentType: "application/json, text/javascript, */*; q=0.01",
//	        success: function(newOrder, textStatus, xhr) {
//	            var lastI = newOrder.length;
//	            console.log(textStatus);
//	            console.log(lastI);
//               console.log(newOrder);
//	            
//	            addOrder(newOrder);
//	        },
//	        error: function (err) {
//	            alert('could not save order!!!!!', err);
//			}
//	    });
//	    
//	    
//	}); 
});