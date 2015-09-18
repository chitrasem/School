<%--@elvariable id="studentForm" type="com.chitra.school.student.Student"--%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<template:schoolBasic htmlTitle="Student" bodyTitle="Tickets">

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
				<!-- Modal -->
					<div id="myModal" class="modal fade" role="dialog">
					  <div class="modal-dialog modal-lg">
					
					    <!-- Modal content-->
					    <div class="modal-content">
					      <div class="modal-header">
					        <button type="button" class="close" data-dismiss="modal">&times;</button>
					        <h4 class="modal-title">Modal Header</h4>
					      </div>
					      <div class="modal-body">
					        <p>Some text in the modal.</p>
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					      </div>
					    </div>
					
					  </div>
					</div>
					<!-- End Modal -->
					
					<div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-body">
								<form:form class="form-horizontal" enctype="form-data" modelAttribute="studentForm">
								  <fieldset>
								    <legend class="panel-title">Personal Information:</legend>
								    <div class="panel-heading"></div>
								    <div class="form-group">
									    <form:label path="firstName" class="col-sm-2 control-label">First Name:</form:label>
									    <div class="col-sm-10">
									      <form:input path="firstName" class="form-control" placeholder="First name" />									      
									    </div>
									 </div>
								    <div class="form-group">
									    <form:label path="lastName" class="col-sm-2 control-label">Last Name:</form:label>
									    <div class="col-sm-10">
									      <form:input  class="form-control" path="lastName" placeholder="Last name" />
									    </div>
									 </div>
								    <div class="form-group">
									    <form:label path="gender" class="col-sm-2 control-label">Gender:</form:label>
									    <div class="col-sm-10">
									      <form:input  class="form-control" path="gender" placeholder="Last name" />
									    </div>
									 </div>
								    <div class="form-group">
									    <form:label path="dateBirth" class="col-sm-2 control-label">Date of Birth</form:label>
									    <div class="col-sm-10">
									      <form:input type="date" class="form-control" path="birthDate"/>
									    </div>
									 </div>
								    <div class="form-group">
									    <form:label path="registerDate" class="col-sm-2 control-label">Register Date:</form:label>
									    <div class="col-sm-10">
									      <form:input type="date" class="form-control" path="registerDate" />
									    </div>
									 </div>
									 <div class="form-group">
									    <div class="col-sm-offset-2 col-sm-10">
									      <form:button type="submit" class="btn btn-default">Sign in</form:button>
									    </div>
									  </div>
								  </fieldset>
								  <fieldset>
								    <legend>Family Information:</legend>
								    <div class="form-group">
									    <label for="fatherName" class="col-sm-2 control-label">Father name:</label>
									    <div class="col-sm-10">
									      <input type="text" class="form-control" id="fatherName" placeholder="Father name">
									    </div>
									 </div>
								  </fieldset>
								</form:form>
							</div>
						</div>
					</div>
				
                  
              </div> <!-- End row -->
			</div><!-- End container -->
		</div><!-- content -->

	</div>
	<!-- ============================================================== -->
	<!-- End Right content here -->
	<!-- ============================================================== -->
	<!-- Modal-Effect -->
        <script src="<c:url value="/resource/assets/modal-effect/js/classie.js" />"></script>
        <script src="<c:url value="/resource/assets/modal-effect/js/modalEffects.js" />"></script>	
	<script type="text/javascript">
   /*  var frm = $('#frmAddStudent');
    frm.submit(function (ev) {
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
			dataType: 'json',
            data: frm.serialize(),
            success: function(data) {
               alert("ajldfj");
            },
            error: function(e){
            	//console.log(e);
            }
        });
        ev.preventDefault();
    }); */
</script>

</template:schoolBasic>
