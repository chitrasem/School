
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
                        	<span class="button btn"><a href="<c:url value="/student/add" />">Add</a></span>
	                        <div id="stu_result">
	                        
	                        </div>
                        </div>
                        
                        
                        </div>
                </div> <!-- content -->

                

            </div>
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
            <script src="<c:url value="/resource/js/school/student.js" />"></script>

</template:schoolBasic>
