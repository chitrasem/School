$(document).ready(function(){	
	// Select2
    jQuery(".select2").select2({
        width: '100%'
    });	
var dialog, form,
  studentData = {},
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    /*emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),*/
    teacher_id		= $( "#teacher"),
	first_name 		= $( "#first_name" ),
	last_name 		= $( "#last_name" ),
	gender 			= $( "#gender" ),
	phone_number	= $("#phone_number"),
	date_birth 		= $( "#date_birth" ),
	date_enrolled 	= $( "#date_enrolled" ),
	allFields 		= $( [] ).add( teacher_id ).add( first_name ).add( last_name ).add( gender ).add(phone_number).add( date_birth ).add( date_enrolled ),    
    
    tips = $( ".validateTips" );
	
  function updateTips( t ) {
    tips
      .text( t )
      .addClass( "ui-state-highlight" );
    setTimeout(function() {
      tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
  }
	
  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " +
        min + " and " + max + "." );
      o.focus();
      return false;
    } else {
      return true;
    }
  }
  function checkNull(o,n){
	  var month = parseInt(o.val().substring(0,2));
	  if(o.val().length<=0 || o.val() == null){
		  o.addClass( "ui-state-error" );
		  updateTips(n + " can't be empty!");
	      o.focus();
		  return false;
	  }else if (month > 12 || month <=0) {
		  o.addClass( "ui-state-error" );
		  updateTips("Invalid month!")
	      o.focus();
		  return false;
		
	}else{
		  return true;
	  }
  }
  function checkSelected(o,n){
	  if(o.val().length==0){
		  o.addClass( "ui-state-error" );
		  updateTips("Please select " + n +" !")
	      o.focus();
		  return false;
	  }else{
		  return true;
	  }
  }
	
  function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }
	
function addUser() {	
	
      var valid = true;
      allFields.removeClass( "ui-state-error" );
		 
		     /* valid = valid && checkLength( name, "username", 3, 16 );
		      valid = valid && checkLength( email, "email", 6, 80 );
		      valid = valid && checkLength( password, "password", 5, 16 );
		 
		      valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
		      valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
		      valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
		 */
  valid = valid && checkSelected( teacher_id, "Teacher");
  valid = valid && checkLength( first_name, "First name", 3, 16);
  valid = valid && checkLength( last_name, "Last name", 3, 16);
  valid = valid && checkSelected( gender, "Gender");
  valid = valid && checkSelected( phone_number, "Phone Number");
  valid = valid && checkNull( date_birth,"date of birth");
  valid = valid && checkNull( date_enrolled,"date of enroll");
  
  if ( valid ) {
   /* $( "#users tbody" ).append( "<tr>" +
      "<td>" + name.val() + "</td>" +
      "<td>" + email.val() + "</td>" +
      "<td>" + password.val() + "</td>" +
    "</tr>" );*/
	  studentData['teacher_id']		= teacher_id.val();
	  studentData['first_name'] 	= first_name.val();
	  studentData['last_name'] 		= last_name.val();
	  studentData['gender']			= gender.val();
	  studentData["phone_number"]	= phone_number.val();
	  studentData["date_birth"]		= date_birth.val();
	  studentData['date_enrolled']	= date_enrolled.val();
	  $.ajax({
		  type 		: "POST",
		  dataType 	: "json",
		  url 		: 'add', 
		  data		: studentData,
		  beforeSend: function(){
			  school.block();
		  },
		  success : function(data){
			  alert(data['success'])
			  if(!$("#teacher_").val()==0){
				student.load($("#teacher_").val());
			  }
			  school.unblock();
			  
		  }
	  });
	  
    dialog.dialog( "close" );
  }
  return valid;
}
$( "#date_birth" ).datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true
  });
$( "#date_enrolled" ).datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true
  });

dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Create a student": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
        $(".validateTips").text("(*) requirement fields");
        $("#teacher").find("select option").prop("selected", false);
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    $( "#create-student" ).button().on( "click", function() {
      dialog.dialog( "open" );
      
    });
    teacher.load();
	$("#teacher_").change(function(){
	    var optionSelected = $("option:selected", this);
	    teacher_id  = this.value;
		studyTime.load();
	});
	$("#study-time_").change(function(){
		var optionSelected = $("option:selected",this);
		time_id = $(this).val();
		 //  student.load(teacher_id,time_id);
	});
});
var studyTime = {
		load : function(){
			$.ajax({
				type		: "GET",
				dataType	: "json",
				url			: "../studyTime/getTime",
				beforeSend	: function(){
					school.block();
				},
				success		: function(data){
					if(data['item']){
						var option = "";
						for(var i=0; i<data['item'].length; i++){
							option +="<option value='"+data['item'][i][0]+"'>"+(data['item'][i][1]).substring(0,5)+"-"+(data['item'][i][2]).substring(0,5)+"</option>";
						}
						$("select.select-study-time").html(option);
						school.unblock();
					}else{
						$("#stu_result").html(school.dbError(data['error']));
						$("#stu_result").css("padding-top","20px");
						school.unblock();
						return false;
					}
				}
			});
		}
}
var teacher = {
		load : function(){
			$.ajax({
				type 		: "GET",
				dataType 	: "json",
				url			: "../staff/getStaffName",
				beforeSend	: function(){
					school.block();
				},
				success		: function(data){
					if(data['item']){
						teacher.createSelectBox(data);
						school.unblock();
						
					}else{
						$("#stu_result").html(school.dbError(data['error']));
						$("#stu_result").css("padding-top","20px");
						school.unblock();
						return false;
					}
					
				}
			});
		},
		createSelectBox : function(data){
			var option = "<option value=''>&nbsp;</option>";
			for(var i=0; i<data['item'].length; i++){
				option += "<option value='"+data['item'][i][2]+"'>"+data['item'][i][1]+" "+data['item'][i][0]+"</option>";
			}
			$("select.select_teacher").html(option);
			/*$.each(data['item'], function(index, item){
				$("select.select_teacher").append(new Option(item[0]+" "+ item[1], item[2]));
			});*/
			
		}
}

var student = {		
		load : function(teacher_id,studyTime){
			studentInfo = {};
			studentInfo['teacher_id'] = teacher_id;
			studentInfo['study_time_id'] = studyTime;
			$.ajax({
				type 		: "POST",
				data 		: studentInfo,
				url 		: "list",
				dataType	: "json",
				beforeSend 	: function(){
					school.block();					
				},
				success 	: function(data){
					if(data['item']){
						student.createTable(data);					
					}else{
						var message = '<div class="alert alert-danger">'+
										'Please contact to the IT for the following error:'+data['error']+
									  '</div>';
						$("#stu_result").html(message);
						$("#stu_result").css("padding-top","20px");
						school.unblock();
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
									"<th>Phone Number</th>" +
								"</thead>" +
								"<tbody>";
				for(i=0;i<student.length;i++){

					if(student[i][2]=="F"){
						student[i][2]="Female";
					}else{
						student[i][2]="Male";
					}
					table +="<tr>" +
								"<td>"+(i+1)+"</td>"+
								"<td>"+student[i][0]+" "+student[i][1]+"</td>"+
								"<td>"+student[i][2]+"</td>"+
								"<td>"+student[i][3]+"</td>"+
								"<td>"+student[i][4]+"</td>"+
								"<td>"+student[i][5]+"</td>"+
							"</tr>";	
				}
				table += "</tbody></table>"
				$("#stu_result").html(table);
			}else{
				var message = '<div class="alert alert-success">'+
								'There is no student in the database yet. <a href="add" class="alert-link">Click here</a>.to add'+
							  '</div>';
				$("#stu_result").html(message);
				$("#stu_result").css("padding-top","20px");
				school.unblock();
			}
			school.unblock();
			
		}
	};
