$(document).ready(function(){	
	// Select2
    jQuery(".select2").select2({
        width: '100%'
    });
	student.load();	
var dialog, form,
  studentData = {},	 
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    /*emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),*/
	first_name = $( "#first_name" ),
	last_name = $( "#last_name" ),
	gender = $( "#gender" ),
	date_birth = $( "#date_birth" ),
	date_enrolled = $( "#date_enrolled" ),
	allFields = $( [] ).add( first_name ).add( last_name ).add( gender ).add( date_birth ).add( date_enrolled ),    
    
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
		  return false;
	  }else if (month > 12 || month <=0) {
		  o.addClass( "ui-state-error" );
		  updateTips("Invalid month!")
		
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
  valid = valid && checkLength( first_name, "first name", 3, 16);
  valid = valid && checkLength( last_name, "last name", 3, 16);
  valid = valid && checkLength( gender, "gender", 1, 6);
  valid = valid && checkNull( date_birth,"date of birth");
  valid = valid && checkNull( date_enrolled,"date of enroll");
  
  if ( valid ) {
   /* $( "#users tbody" ).append( "<tr>" +
      "<td>" + name.val() + "</td>" +
      "<td>" + email.val() + "</td>" +
      "<td>" + password.val() + "</td>" +
    "</tr>" );*/
	  studentData['first_name'] 	= first_name.val();
	  studentData['last_name'] 		= last_name.val();
	  studentData['gender']			= gender.val();
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
			  student.load();
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
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    $( "#create-student" ).button().on( "click", function() {
      dialog.dialog( "open" );
      
    });	  
});

var student = {		
		load : function(){
			$.ajax({
				type : "GET",
				dataType: 'json',
				url : "data",
				beforeSend : function(){
					school.block();					
				},
				success : function(data){
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
			console.log(data['item'][0][0]);
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
								"<td>"+student[i][0]+" "+student[i][1]+"</td>"+
								"<td>"+student[i][2]+"</td>"+
								"<td>"+student[i][3]+"</td>"+
								"<td>"+student[i][4]+"</td>"+
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
			school.unblock();
			
		}
	};
