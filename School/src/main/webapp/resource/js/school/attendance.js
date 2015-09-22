$(document).ready(function(){
	attendance.loadData();
	//attendance.showClass();
	
	
});
var message = {
		noData : '<div class="alert alert-success">'+
				 'There is no data in the database yet. <a href="add" class="alert-link">Click here</a>.to add'+
				 '</div>',
		dbError : function(messageError){
			message = '<div class="alert alert-danger">'+
			'Please contact to the IT for the following error:'+messageError+
			  '</div>';
			return message;
		}
			
};
var attendance = {
		block : function(){
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
		unblock : function(){
			$('div.content-page').unblock();			
		},
		showClass : function(){
			$.ajax({
				
				type : 'GET',
				url  : '',
				dataType : 'json',
				beforeSend : function(){
					
				},
				success : function(resp){
					
				},
				error : function(){
					
				}
			});			
		},
		loadData : function(){
			$.ajax({
				type : 'GET',
				dataType : 'json',
				url : "list",
				beforeSend : function(){ 
					attendance.block();
				},
				error : function(){
					$('div.content-page').unblock();
					
				},
				success : function(response){
					attendance.unblock();
					
					if(response['item']){
						attendance.createAttendanceList(response,09,2015);
						
					}else{
						$("#att_result").html(message.dbError(response['error']));
						$("#att_result").css("padding-top","20px");
					}
				}
			});
		},
		createAttendanceList : function(response,month,year){			
			if(response['item'].length==0){
				$("#att_result").html(message.noData);
				$("#att_result").css("padding-top","20px");
			}else{
				$.ajax({
					type: "GET",
					dataType : "JSON",
					url : "/School/student/studentName",
					success : function(data){	
						var students = [];						
						for(i=0; i<data['item'].length;i++){
							students.push(data['item'][i][0]+" "+data['item'][i][1]);
						}
						console.log(students);
						
					}
				});
				var attendances = [];
				var atten = {};
				
				atten.stu_id = 1;
				atten.date = new Date();
				atten.status = "A";

				attendances.push(atten);
				
				attendance.stu_id = 2;
				attendance.date = new Date("10/11/2015");
				attendance.status = "P";

				attendances.push(attendance);
				
				
				var absentDate = [];
				for(i=0;i<response['item'].length;i++){
					absentDate.push((response['item'][i].absentDate).substring(0,10));
				}
				var currentDate = new Date();
				var days = attendance.createDayOfMonth(month, year);
				/*var attendances = [];
					attendances.push(response['item']);*/
					console.log(attendances);
				
				var table = '<table id="ATTENDANCE" class="table table-bordered">'+
								'<thead>'+
									'<tr id="ATTENDANCE_DAY_NO">'+
										'<th rowspan="2">#</th>'+
										'<th rowspan="2" style="width:300px"><span style="width:300px; position: relative;top: -16px;right: 0px;">StudentName</span>'+
									'</tr>'+
									'<tr id="ATTENDANCE_DAY_NAME">'+
									'</tr>'+
								'</thead>'+
								'<tbody>'+
									
								'</tbody>'+
							'</table>';
				$("#att_result").html(table);
				
				for(var i=0; i<days.length;i++){
					$("#ATTENDANCE thead tr#ATTENDANCE_DAY_NO").append("<th>"+days[i].getDate()+"</th>");
					$("#ATTENDANCE thead tr#ATTENDANCE_DAY_NAME").append("<th>"+attendance.createDayOfWeek(days[i])+"</th>");
				}
				for(var i=0; i<students.length; i++){
					var str = "<tr><td>"+(i+1)+"</td>" +
							"<td  style='font-weight: bold;'>"+students[i]+"</td>";
					for(var j=0; j<days.length;j++){
						for(var k=0;k<attendances.length;k++){
							
							if(attendances[k].stu_id == i && attendances[k].date.getDate() == days[j].getDate()){
								status = attendances[k].status;							
								
							}
						}
						//str += "<td><input type='text' style='text-align: center; width:20px; font-weight: bold;' maxlength='1' value='"+status+"'></td>";
						str += "<td><a href='#' class='sex' data-type='select' data-pk='1' data-value='"+status[j]+"' data-title='emp'></a></td>";
					}
					str +="</tr>";
					$("#ATTENDANCE tbody").append(str);		
					
					
				}
				//
				 $('.sex').editable({
				      prepend: "emp",
				      source: [
				      {value: 1, text: 'B'},
				      {value: 2, text: 'A'}
				      ]
				    });


				
				//
			}
			
		},
		createDayOfWeek : function(date){
            var dayNames = new Array('Su','Mo','Tu','We','Th','Fr','Sa');
            var nData = new Date(date);
            return dayNames[nData.getDay()];			
		},
		createDayOfMonth : function(month,year){
	         // Since no month has fewer than 28 days
	         var date = new Date(year, month, 1);
	         var days = [];
	         console.log('month', month, 'date.getMonth()', date.getMonth())
	         while (date.getMonth() === month) {
	            days.push(new Date(date));
	            date.setDate(date.getDate() + 1);
	         }
	         return days;
			
		}
};