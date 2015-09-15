$(document).ready(function(){
	student.load();	
});
var student = {
		
	load : function(){
		$.ajax({
			type : "GET",
			dataType: 'json',
			url : "data",
			success : function(data){
				if(data['item']){
					student.createTable(data);					
				}else{
					//alert("Please contact to the IT for the following erroro: " +data['error']);
					var message = '<div class="alert alert-danger">'+
									'Please contact to the IT for the following erroro:'+data['error']+
								  '</div>';
					$("#stu_result").html(message);
					$("#stu_result").css("padding-top","20px");
				}
				
			}
		});
		
	},
	createTable : function(data){
		console.log(data['item'].length);
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