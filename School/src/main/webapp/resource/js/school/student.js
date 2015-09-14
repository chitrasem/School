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
					alert("Please contact to the IT for the following erroro: " +data['error']);
				}
				
			}
		});
		
	},
	createTable : function(data){
		if(data['item']!=null || data['item'] !=""){
			var student = data['item'];
			console.log(student);
			var table = "<table class='table'>" +
							"<thead>" +
								"<th>#</th>" +
								"<th>#</th>" +
								"<th>#</th>" +
							"</thead>" +
							"<tbody>";
			for(i=0;i<student.length;i++){
				table +="<tr>" +
							"<td>"+(i+1)+"</td>"+
							"<td>"+student[i]['firstName']+" "+student[i]['lastName']+"</td>"+
							"<td>"+student[i]['sex']+"</td>"+
						"</tr>";	
			}
			table += "</tbody></table>"
			$("#stu_result").html(table);
		}else{
			alert(data['item']);
		}
	}
};