
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
				
                  <div class="col-sm-12">
                      <div class="panel panel-default">
                          <div class="panel-heading"><h3 class="panel-title">Form elements</h3></div>
                          <div class="panel-body">
                          
                              <form class="form-horizontal" role="form"> 
                              		           
                              	 <div class="form-group">
                              	 	<!-- Large modal -->
                              	 	<button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">Open Modal</button>
                                          	 
                              	 </div>                        
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Text</label>
                                      <div class="col-md-10">
                                          <input type="text" class="form-control" value="Some text value...">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" for="example-email">Email</label>
                                      <div class="col-md-10">
                                          <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Email">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Password</label>
                                      <div class="col-md-10">
                                          <input type="password" class="form-control" value="password">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Readonly</label>
                                      <div class="col-md-10">
                                          <input type="text" class="form-control" readonly="" value="Readonly value">
                                      </div>
                                  </div>                                    
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Disabled</label>
                                      <div class="col-md-10">
                                          <input type="text" class="form-control" disabled="" value="Disabled value">
                                      </div>
                                  </div>                                    
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Placeholder</label>
                                      <div class="col-md-10">
                                          <input type="text" class="form-control" placeholder="placeholder">
                                      </div>
                                  </div>                                                                        
                                  <div class="form-group">
                                      <label class="col-md-2 control-label">Text area</label>
                                      <div class="col-md-10">
                                          <textarea class="form-control" rows="5"></textarea>
                                      </div>
                                  </div>
                                  
                                  <div class="form-group">
                                      <label class="col-sm-2 control-label">Static control</label>
                                      <div class="col-sm-10">
                                        <p class="form-control-static">email@example.com</p>
                                      </div>
                                  </div>  
                                  <div class="form-group">
                                      <label class="col-sm-2 control-label">Helping text</label>
                                      <div class="col-sm-7">
                                        <input type="text" class="form-control" placeholder="Helping text">
                                        <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                                      </div>
                                  </div>  

                                  <div class="form-group">
                                      <label class="col-sm-2 control-label">Input Select</label>
                                      <div class="col-sm-10">
                                          <select class="form-control">
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                          </select>
                                          <h6>Multiple select</h6>
                                          <select multiple="" class="form-control">
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                          </select>
                                      </div>
                                  </div>
                 
                              </form>
                          </div> <!-- panel-body -->
                      </div> <!-- panel -->
                  </div> <!-- col -->
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
	<script>
	</script>

</template:schoolBasic>
