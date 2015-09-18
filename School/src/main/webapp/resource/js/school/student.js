$(document).ready(function(){
	student.load();	
});
var student = {		
	load : function(){
		$.ajax({
			type : "GET",
			dataType: 'json',
			url : "data",
			beforeSend : function(){				
				$('div.content-page').block({ 
	                css: {border: 'none', 
	                    padding: '15px', 
	                    backgroundColor: '#000', 
	                    '-webkit-border-radius': '10px', 
	                    '-moz-border-radius': '10px', 
	                    opacity: .5, 
	                    color: '#fff'  } 
	            });   
				
			},
			success : function(data){
				$('div.content-page').unblock();
				if(data['item']){
					student.createTable(data);					
				}else{
					var message = '<div class="alert alert-danger">'+
									'Please contact to the IT for the following error:'+data['error']+
								  '</div>';
					$("#stu_result").html(message);
					$("#stu_result").css("padding-top","20px");
				}
				
			}
		});
		
	},
	createTable : function(data){
		if(data['item'].length>0){
			var student = data['item'];
			var table = "<table class='table'>" +
							"<thead>" +
								"<th>#</th>" +
								"<th>Name</th>" +
								"<th>Gender</th>" +
								"<th>Date of Birth</th>" +
								"<th>Registerd Date</th>" +
							"</thead>" +
							"<tbody>";
			for(i=0;i<student.length;i++){
				table +="<tr>" +
							"<td>"+(i+1)+"</td>"+
							"<td>"+student[i]['firstName']+" "+student[i]['lastName']+"</td>"+
							"<td>"+student[i]['sex']+"</td>"+
							"<td>"+student[i]['birthDate']+"</td>"+
							"<td>"+student[i]['registerDate']+"</td>"+
						"</tr>";	
			}
			table += "</tbody></table>"
			$("#stu_result").html(table);
		}else{
			var message = '<div class="alert alert-success">'+
							'There is no data in the database yet. <a href="add" class="alert-link">Click here</a>.to add'+
						  '</div>';
			$("#stu_result").html(message);
			$("#stu_result").css("padding-top","20px");
		}
		
	}
};