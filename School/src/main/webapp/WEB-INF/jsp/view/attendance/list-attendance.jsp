
<template:schoolBasic htmlTitle="List Attendance" bodyTitle="Attendance">
	<div class="content-page">
		<!-- Start content -->
		<div class="content">
			<div class="container">

				<!-- Page-Title -->
				<div class="row">
					<div class="col-sm-12">
						<h4 class="pull-left page-title">Attendance Management</h4>
						<ol class="breadcrumb pull-right">
							<li><a href="<c:url value="/dashboard"/>">Dashboard</a></li>
							<li class="active">Attendance</li>
						</ol>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-default">
							<div class="panel-body">
							
								<div class="row">
                                    <div class="col-sm-6">
                                        <div class="m-b-30">
											  <label for="sel1">Select list:</label>											  	
											  <select class="btn btn-primary" id="sel1">
											    <option>Class A1</option>
											    <option>Class A1 2</option>
											    <option>Class A1 3</option>
											    <option>Class A1 4</option>
											  </select>
											<input type="radio" class="btn btn-primary "/>
                                        
                                            <button id="addToTable" class="btn btn-primary waves-effect waves-light">Add <i class="fa fa-plus"></i></button>
                                        
                                            <button id="addToTable" class="btn btn-primary waves-effect waves-light">Add <i class="fa fa-plus"></i></button>
                                        
                                        </div>
                                    </div>
                                </div>
												
								<div id="att_result" style="padding: 10px;"class="table-responsive">
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- XEditable Plugin -->
        <script type="text/javascript" src="<c:url value="/resource/assets/bootstrap3-editable/moment.min.js" />"></script>    
        <script type="text/javascript" src="<c:url value="/resource/assets/bootstrap3-editable/bootstrap-editable.js" />"></script>
	<script src="<c:url value="/resource/js/school/attendance.js" />"></script>
	


</template:schoolBasic>