
<template:schoolBasic htmlTitle="List Student" bodyTitle="Tickets">
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
								<div id="att_result" style="padding: 10px;"class="table-responsive">
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<c:url value="/resource/js/school/attendance.js" />"></script>


</template:schoolBasic>