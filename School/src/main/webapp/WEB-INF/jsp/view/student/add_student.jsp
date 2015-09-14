
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
				<div>
					<!-- Wizard with Validation -->
					<div class="row">
						<div class="col-md-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h3 class="panel-title">Wizard with Validation</h3>
								</div>
								<div class="panel-body">
									<form id="wizard-validation-form" action="#">
										<div>
											<h3>Step 1</h3>
											<section>
												<div class="form-group clearfix">
													<label class="col-lg-2 control-label" for="firstName">
														First name *</label>
													<div class="col-lg-10">
														<input id="firstName" name="name" type="text"
															class="required form-control">
													</div>
												</div>
												<div class="form-group clearfix">
													<label class="col-lg-2 control-label " for="lastName">
														Last name *</label>
													<div class="col-lg-10">
														<input id="lastName" name="surname" type="text"
															class="required form-control">

													</div>
												</div>
												
												<div class="form-group clearfix">
													<label class="col-lg-12 control-label ">(*)
														Mandatory</label>
												</div>
											</section>
											<h3>Step 2</h3>
											<section>

												<div class="form-group clearfix">
													<label class="col-lg-2 control-label" for="name2">
														First name *</label>
													<div class="col-lg-10">
														<input id="name2" name="name" type="text"
															class="required form-control">
													</div>
												</div>
												<div class="form-group clearfix">
													<label class="col-lg-2 control-label " for="surname2">
														Last name *</label>
													<div class="col-lg-10">
														<input id="surname2" name="surname" type="text"
															class="required form-control">

													</div>
												</div>

												<div class="form-group clearfix">
													<label class="col-lg-2 control-label " for="email2">Email
														*</label>
													<div class="col-lg-10">
														<input id="email2" name="email" type="text"
															class="required email form-control">
													</div>
												</div>

												<div class="form-group clearfix">
													<label class="col-lg-2 control-label " for="address2">Address
													</label>
													<div class="col-lg-10">
														<input id="address2" name="address" type="text"
															class="form-control">
													</div>
												</div>

												<div class="form-group clearfix">
													<label class="col-lg-12 control-label ">(*)
														Mandatory</label>
												</div>

											</section>
											<h3>Step 3</h3>
											<section>
												<div class="form-group clearfix">
													<div class="col-lg-12">
														<ul class="list-unstyled w-list">
															<li>First Name : Jonathan</li>
															<li>Last Name : Smith</li>
															<li>Emial: jonathan@smith.com</li>
															<li>Address: 123 Your City, Cityname.</li>
														</ul>
													</div>
												</div>
											</section>
											<h3>Step Final</h3>
											<section>
												<div class="form-group clearfix">
													<div class="col-lg-12">
														<input id="acceptTerms-2" name="acceptTerms2"
															type="checkbox" class="required"> <label
															for="acceptTerms-2">I agree with the Terms and
															Conditions.</label>
													</div>
												</div>

											</section>
										</div>
									</form>
								</div>
								<!-- End panel-body -->
							</div>
							<!-- End panel -->

						</div>
						<!-- end col -->

					</div>
					<!-- End row -->



				</div>

			</div>
		</div>
		<!-- content -->

	</div>
	<!-- ============================================================== -->
	<!-- End Right content here -->
	<!-- ============================================================== -->
	<script src="<c:url value="/resource/js/school/student.js" />"></script>

	<!--Form Validation-->
	<script
		src="<c:url value="/resource/assets/form-wizard/bootstrap-validator.min.js" />"
		type="text/javascript"></script>

	<!--Form Wizard-->
	<script
		src="<c:url value="/resource/assets/form-wizard/jquery.steps.min.js" />"
		type="text/javascript"></script>
	<script type="text/javascript"
		src="<c:url value="/resource/assets/jquery.validate/jquery.validate.min.js" />"></script>

	<!--wizard initialization-->
	<script
		src="<c:url value="/resource/assets/form-wizard/wizard-init.js" />"
		type="text/javascript"></script>

</template:schoolBasic>
