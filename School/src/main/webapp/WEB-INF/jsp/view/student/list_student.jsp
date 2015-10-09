
<template:schoolBasic htmlTitle="List Student" bodyTitle="Tickets">
	
<!-- ============================================================== -->
   <!-- Start right Content here -->
   <!-- ============================================================== -->                      
   <div class="content-page">
       <!-- Start content -->
       <div class="content">
           <div class="container">

               <!-- Page-Title -->
               <div class="row">
                   <div class="col-sm-12">
                       <h4 class="pull-left page-title">Student</h4>
                       <ol class="breadcrumb pull-right">
                           <li><a href="<c:url value="/dashboard"/>">Dashboard</a></li>
                           <li class="active">Student</li>
                       </ol>
                   </div>
               </div>
                <div class="row">
                 <div class="col-md-12">
                  <div class="panel panel-default">
                      <div class="panel-body">	                       							      
					      <div class="form-group">
						      <div class="col-sm-2">
						        <select data-placeholder="choose teacher..." class="select2 select_teacher" name="teacher" id="teacher_">
						        	<option value="">&nbsp;</option>
						        </select>
					      	  </div>
						      <div class="col-sm-2">
						        <select data-placeholder="choose time..." class="select2 select-study-time" name="teacher" id="study-time_">
						        	
						        </select>
					      	  </div>
							  <input type="button" class="btn btn-success" id="create-student" value="Create Student">					      	  
					      </div>
							      
							      
	                    <div id="stu_result">                       
	                    </div>
	                    <!-- The dialog form -->
                      	<div id="dialog-form" title="Create new user" style="width: 700px;">                      		
                             <div class="alert alert-danger alert-dismissable">                             	
                      		 	<p class="validateTips">(*) requirement fields</p>
                             </div>						 
							  <form class="form-horizontal" role="form">
							    <fieldset>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="teacher">Teacher *</label>
								      <div class="col-sm-6">
								        <select data-placeholder="choose teacher..." class="select2 select_teacher" name="teacher" id="teacher">
                                            <option value="">&nbsp;</option>
								        </select>
							      	  </div>							      	  
								        <input type="button" value="+" class="btn btn-info">							      	  
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="first_name">First Name *</label>
								      <div class="col-sm-9">
								      	<input type="text" name="first_name" id="first_name" class="form-control">
							      	  </div>
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="last_name">Last Name *</label>
								      <div class="col-sm-9">
								      	<input type="text" name="last_name" id="last_name" class="form-control">
							      	  </div>
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="gender">Gender</label>
							      	  <div class="col-sm-3">
								        <select data-placeholder="choose gender..." class="select2" name="gender" id="gender">
                                            <option value="">&nbsp;</option>
								        	<option value="M">Male</option>
								        	<option value="F">Female</option>
								        </select>
							      	  </div>
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="phone_number">Phone number *</label>
								      <div class="col-sm-9">
								      	<input type="text" name="phone_number" id="phone_number" class="form-control">
							      	  </div>
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="date_birth">Date of Birth *</label>
								      <div class="col-sm-3">
								      	<input type="text" name="date_birth" id="date_birth" class="form-control">
							      	  </div>
							      </div>							      
							      <div class="form-group">
								      <label class="col-sm-3 control-label" for="date_enrolled">Enrolled Date *</label>
								      <div class="col-sm-3">
								      	<input type="text" name="date_enrolled" id="date_enrolled" class="form-control">
							      	  </div>
							      </div>
							      
							    </fieldset>
							      <div class="form-group m-b-0">
							      	<div class="col-sm-offset-3 col-sm-9">
								      <!-- Allow form submission with keyboard without duplicating the dialog button -->
								      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px" class="btn btn-info waves-effect waves-light">
							      	</div>
							      </div>								    
							  </form>						  
						</div>
					<!-- End dialog form -->			                            
                      </div>
                   </div>
                  </div> 
                 </div>
               </div><!-- container -->
       </div> <!-- content -->                

   </div>
   <!-- ============================================================== -->
   <!-- End Right content here -->
   <!-- ============================================================== -->
   <script src="<c:url value="/resource/js/school/school.js" />"></script>
   <script src="<c:url value="/resource/js/school/student.js" />"></script>
   
   
</template:schoolBasic>
