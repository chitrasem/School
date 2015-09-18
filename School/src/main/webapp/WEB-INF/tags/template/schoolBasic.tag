<%@ tag body-content="scriptless" trimDirectiveWhitespaces="true" %>
<%@ attribute name="htmlTitle" type="java.lang.String" rtexprvalue="true"
              required="true" %>
<%@ attribute name="bodyTitle" type="java.lang.String" rtexprvalue="true"
              required="true" %>
<%@ attribute name="extraHeadContent" fragment="true" required="false" %>
<%@ attribute name="extraNavigationContent" fragment="true" required="false" %>
<%@ include file="/WEB-INF/jsp/base.jspf" %>
<template:schoolMain htmlTitle="${htmlTitle}" bodyTitle="${bodyTitle}">
    <jsp:attribute name="headContent">
        <jsp:invoke fragment="extraHeadContent" />
    </jsp:attribute>
    <jsp:attribute name="navigationContent">
    <!-- Begin page -->
        <div id="wrapper">        
            <!-- Top Bar Start -->
            <div class="topbar">
                <!-- LOGO -->
                <div class="topbar-left">
                    <div class="text-center">
                        <a href="<c:url value="/dashboard" />" class="logo"><i class="md md-terrain"></i> <span>Moltran </span></a>
                    </div>
                </div>
                <!-- Button mobile view to collapse sidebar menu -->
                <div class="navbar navbar-default" role="navigation">
                    <div class="container">
                        <div class="">
                            <div class="pull-left">
                                <button class="button-menu-mobile open-left">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <span class="clearfix"></span>
                            </div>
                            <form class="navbar-form pull-left" role="search">
                                <div class="form-group">
                                    <input type="text" class="form-control search-bar" placeholder="Type here for search...">
                                </div>
                                <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                            </form>

                            <ul class="nav navbar-nav navbar-right pull-right">
                                <li class="dropdown hidden-xs">
                                    <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                        <i class="md md-notifications"></i> <span class="badge badge-xs badge-danger">3</span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-lg">
                                        <li class="text-center notifi-title">Notification</li>
                                        <li class="list-group">
                                           <!-- list item-->
                                           <a href="javascript:void(0);" class="list-group-item">
                                              <div class="media">
                                                 <div class="pull-left">
                                                    <em class="fa fa-user-plus fa-2x text-info"></em>
                                                 </div>
                                                 <div class="media-body clearfix">
                                                    <div class="media-heading">New user registered</div>
                                                    <p class="m-0">
                                                       <small>You have 10 unread messages</small>
                                                    </p>
                                                 </div>
                                              </div>
                                           </a>
                                           <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                              <div class="media">
                                                 <div class="pull-left">
                                                    <em class="fa fa-diamond fa-2x text-primary"></em>
                                                 </div>
                                                 <div class="media-body clearfix">
                                                    <div class="media-heading">New settings</div>
                                                    <p class="m-0">
                                                       <small>There are new settings available</small>
                                                    </p>
                                                 </div>
                                              </div>
                                            </a>
                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                              <div class="media">
                                                 <div class="pull-left">
                                                    <em class="fa fa-bell-o fa-2x text-danger"></em>
                                                 </div>
                                                 <div class="media-body clearfix">
                                                    <div class="media-heading">Updates</div>
                                                    <p class="m-0">
                                                       <small>There are
                                                          <span class="text-primary">2</span> new updates available</small>
                                                    </p>
                                                 </div>
                                              </div>
                                            </a>
                                           <!-- last list item -->
                                            <a href="javascript:void(0);" class="list-group-item">
                                              <small>See all notifications</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="hidden-xs">
                                    <a href="#" id="btn-fullscreen" class="waves-effect waves-light"><i class="md md-crop-free"></i></a>
                                </li>
                                <li class="hidden-xs">
                                    <a href="#" class="right-bar-toggle waves-effect waves-light"><i class="md md-chat"></i></a>
                                </li>
                                <li class="dropdown">
                                    <a href="" class="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true"><img src="<c:url value="/resource/images/avatar-1.jpg" />" alt="user-img" class="img-circle"> </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="javascript:void(0)"><i class="md md-face-unlock"></i> Profile</a></li>
                                        <li><a href="javascript:void(0)"><i class="md md-settings"></i> Settings</a></li>
                                        <li><a href="javascript:void(0)"><i class="md md-lock"></i> Lock screen</a></li>
                                        <li><a href="javascript:void(0)"><i class="md md-settings-power"></i> Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!--/.nav-collapse -->
                    </div>
                </div>
            </div>
            <!-- Top Bar End -->


            <!-- ========== Left Sidebar Start ========== -->

            <div class="left side-menu">
                <div class="sidebar-inner slimscrollleft">
                    <div class="user-details">
                        <div class="pull-left">
                            <img src="<c:url value="/resource/images/users/avatar-1.jpg" />" alt="" class="thumb-md img-circle">
                        </div>
                        <div class="user-info">
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">John Doe <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)"><i class="md md-face-unlock"></i> Profile<div class="ripple-wrapper"></div></a></li>
                                    <li><a href="javascript:void(0)"><i class="md md-settings"></i> Settings</a></li>
                                    <li><a href="javascript:void(0)"><i class="md md-lock"></i> Lock screen</a></li>
                                    <li><a href="javascript:void(0)"><i class="md md-settings-power"></i> Logout</a></li>
                                </ul>
                            </div>
                            
                            <p class="text-muted m-0">Administrator</p>
                        </div>
                    </div>
                    <!--- Divider -->
                    <div id="sidebar-menu">
                        <ul>
                            <li>
                                <a href="<c:url value="/dashboard" />" class="waves-effect"><i class="md md-home"></i><span> Dashboard </span></a>
                            </li>
                            <li>
                                <a href="<c:url value="/student/show" />" class="waves-effect"><i class="md  md-account-box"></i><span>Student</span></a>
                            </li>
                            <li>
                                <a href="<c:url value="/attendance/show" />" class="waves-effect"><i class="md  md-grid-on"></i><span>Attendance</span></a>
                            </li>

                            <li class="has_sub">
                                <a href="#" class="waves-effect"><i class="md md-mail"></i><span> Mail </span><span class="pull-right"><i class="md md-add"></i></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="inbox.html">Inbox</a></li>
                                    <li><a href="email-compose.html">Compose Mail</a></li>
                                    <li><a href="email-read.html">View Mail</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- Left Sidebar End --> 
    
    
        <%-- <a href="<c:url value="/ticket/list" />"><spring:message code="nav.item.list.tickets" /></a><br />
        <a href="<c:url value="/ticket/create" />"><spring:message code="nav.item.create.ticket" /></a><br />
        <a href="javascript:void 0;"
           onclick="newChat();"><spring:message code="nav.item.chat.support" /></a><br />
        <a href="<c:url value="/chat/list" />"><spring:message code="nav.item.view.chat" /></a><br />
        <a href="<c:url value="/session/list" />"><spring:message code="nav.item.list.session" /></a><br />
        <a href="<c:url value="/logout" />"><spring:message code="nav.item.logout" /></a><br /> --%>
        
        
        <jsp:invoke fragment="extraNavigationContent" />
        </jsp:attribute>
        <jsp:body>
        <jsp:doBody />
        		<footer class="footer text-right">
                    2015 © Moltran.
                </footer>
                <!-- Right Sidebar -->
	            <div class="side-bar right-bar nicescroll">
	                <h4 class="text-center">Chat</h4>
	                <div class="contact-list nicescroll">
	                    <ul class="list-group contacts-list">
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-1.jpg" />" alt="">
	                                </div>
	                                <span class="name">Chadengle</span>
	                                <i class="fa fa-circle online"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-2.jpg" />" alt="">
	                                </div>
	                                <span class="name">Tomaslau</span>
	                                <i class="fa fa-circle online"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-3.jpg" />" alt="">
	                                </div>
	                                <span class="name">Stillnotdavid</span>
	                                <i class="fa fa-circle online"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-4.jpg" />" alt="">
	                                </div>
	                                <span class="name">Kurafire</span>
	                                <i class="fa fa-circle online"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-5.jpg" />" alt="">
	                                </div>
	                                <span class="name">Shahedk</span>
	                                <i class="fa fa-circle away"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-6.jpg" />" alt="">
	                                </div>
	                                <span class="name">Adhamdannaway</span>
	                                <i class="fa fa-circle away"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-7.jpg" />" alt="">
	                                </div>
	                                <span class="name">Ok</span>
	                                <i class="fa fa-circle away"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-8.jpg" />" alt="">
	                                </div>
	                                <span class="name">Arashasghari</span>
	                                <i class="fa fa-circle offline"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-9.jpg" />" alt="">
	                                </div>
	                                <span class="name">Joshaustin</span>
	                                <i class="fa fa-circle offline"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                        <li class="list-group-item">
	                            <a href="#">
	                                <div class="avatar">
	                                    <img src="<c:url value="/resource/images/users/avatar-10.jpg" />" alt="">
	                                </div>
	                                <span class="name">Sortino</span>
	                                <i class="fa fa-circle offline"></i>
	                            </a>
	                            <span class="clearfix"></span>
	                        </li>
	                    </ul>  
	                </div>
	            </div>
	            <!-- /Right-bar -->
	
	
	        </div>
	        <!-- END wrapper -->
	    
	       
        </jsp:body>
        
</template:schoolMain>
