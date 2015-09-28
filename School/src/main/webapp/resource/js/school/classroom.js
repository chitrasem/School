(function( $ ) {
	'use strict';
	
	//this.classroom.loadClassrom();
	
	var classroom = {
			createJsGrid : function(){
				
				$("#datatable-editable").jsGrid({
					height : "auto",
					width : "auto",
					
					filtering: true,
					editing: true,
					sorting: true,
					paging: true,
					autoload: true,
					pageSize: 15,
					pageButtonCount: 5,
					//data : classroom.loadClassroom(),
					
	                controller: {
	                    loadData: function() {
	                      /*  var d = $.Deferred();

	                        $.ajax({
	                            url: "http://localhost:8080/School/classroom/list",
	                            dataType: "json"
	                        }).done(function(response) {
	                            setTimeout(function() {
	                                d.resolve(response.item);
	                            }, 2000);
	                        });
	                      //  console.log(d.promise());

	                        return d.promise();*/
	                    	
	                    	return classroom.loadClassroom();
	                    },
	                },
	                loadIndicator: function(config) {
	                    var container = config.container[0];
	                    var spinner = new Spinner();

	                    return {
	                        show: function() {
	                            spinner.spin(container);
	                        },
	                        hide: function() {
	                            spinner.stop();
	                        }
	                    };
	                },
					
					deleteConfirm: "Do really want to delete?",
					
					fields: [
					         { name: "id", type: "text", width: 10},
					         { name: "classRoom", type: "text", width: 50}
					         ]
				});
			},
			/**
			 * loadClassroom
			 */	
			loadClassroom : function(){				
				$.ajax({
					type : 'get',
					dataType : 'json',
					url : 'list',
					beforeSend : function(){
						//school.block();
					},
					success : function(resp){
						if(resp['item']){
							console.log(resp);
							//classroom.crateTable(resp);
							return resp.item;
							//school.unblock();
						}else{
							$("#result").html(school.dbError(resp['error']));
							school.unblock();		
							return false;
						}				
					},
					error : function(){
						
					}
				});
			},	// end loadclassroom function
			crateTable : function(resp){
				if(resp['item'].length==0){
					$("#result").html(school.noData);
					school.unblock();
				}else{
					//<table class='table table-bordered table-striped' id='datatable-editable'>
					var table = "<thead>"+
										"<tr>" +
											"<th>#</th>" +
											"<th>Classroom</th>" +
										"</tr>"+
									"</thead>"+
									"<tbody>";
					for(var i=0; i<resp['item'].length;i++){
						table += "<tr>"+
									"<td>"+(i+1)+"</td>"+
									"<td>"+ resp['item'][i].classRoom +"</td>"+
								 "</tr>";				
					}//end for loop
					
					table +="</tbody>";
					$("#datatable-editable").html(table);			
					school.createButton("addToTable","Add");
					school.unblock();
					classroom.createJsGrid();
		
					$("#addToTable").click(function(){
						alert("How are you doing?");
					});
				}//end else
				
				
			}//end function createTable

				
		};


	$(function() {
		classroom.createJsGrid();
		//classroom.loadClassroom();
	});
	
}).apply( this, [ jQuery ]);