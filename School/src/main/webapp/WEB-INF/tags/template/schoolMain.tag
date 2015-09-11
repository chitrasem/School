<%@ tag body-content="scriptless" trimDirectiveWhitespaces="true" %>
<%@ attribute name="htmlTitle" type="java.lang.String" rtexprvalue="true"
              required="true" %>
<%@ attribute name="bodyTitle" type="java.lang.String" rtexprvalue="true"
              required="true" %>
<%@ attribute name="headContent" fragment="true" required="false" %>
<%@ attribute name="navigationContent" fragment="true" required="true" %>
<%@ include file="/WEB-INF/jsp/base.jspf" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
        <meta name="author" content="Coderthemes">

        <link rel="shortcut icon" href="resource/images/favicon_1.ico">
    
    	<title>School <c:out value="${fn:trim(htmlTitle)}" /></title>

        <!-- Base Css Files -->
        <link href="<c:url value="/resource/css/bootstrap.min.css" />" rel="stylesheet" />

        <!-- Font Icons -->
        <link href="<c:url value="/resource/assets/font-awesome/css/font-awesome.min.css" />" rel="stylesheet" />
        <link href="<c:url value="/resource/assets/ionicon/css/ionicons.min.css" />" rel="stylesheet" />
        <link href="<c:url value="/resource/css/material-design-iconic-font.min.css" />" rel="stylesheet">

        <!-- animate css -->
        <link href="<c:url value="/resource/css/animate.css" />" rel="stylesheet" />

        <!-- Waves-effect -->
        <link href="<c:url value="/resource/css/waves-effect.css" />"rel="stylesheet">

        <!-- Custom Files -->
        <link href="<c:url value="/resource/css/helper.css" />" rel="stylesheet"  type="text/css" />
        <link href="<c:url value="/resource/css/style.css" />" rel="stylesheet"  type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
        
        <jsp:invoke fragment="headContent" />
    </head>
    <body>
    	<jsp:invoke fragment="navigationContent" />
    	<%-- <h2><c:out value="${fn:trim(bodyTitle)}" /></h2> --%>
        <jsp:doBody />
    </body>
</html>
