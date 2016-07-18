<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.pojo.User"%>
<%@page import="com.eypg.util.Struts2Utils"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	ResourceBundle url = ResourceBundle.getBundle("config");
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<title>1元拍购_管理中心_代理级别列表</title>
		<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
		<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
		<script type="text/javascript" src="/ueditor/editor_config.js"></script>
		<script type="text/javascript" src="/ueditor/editor_all.js"></script>
		<script language="javascript" type="text/javascript"
			src="/js/jquery-1.4.4-min.js"></script>
	</head>

	<body>
	<div class="header lr10"><a href="/admin_back/toAddGrade.action">添加代理等级</a></div>
	<div class="bk10"></div>

<div class="table-list lr10">        
  <!--start-->
  <table width="100%" cellspacing="0">
    <thead>
		<tr>
            <th align="center">GID</th>
            <th align="center">代理名</th>
            <th align="center">佣金比例</th>
            <th align="center">保证金</th>
            <th align="center">描述</th>
            <th align="center">管理</th>
		</tr>
    </thead>
    <tbody>
    
    <s:iterator value="gradeList" var="grade" status="st">
		<tr class="gradeA even">
			<td align="center">${grade.id }</td>
			<td align="center">${grade.name }</td>
			<td align="center">${grade.commissionRate }</td>
			<td align="center">${grade.bailMoney }</td>
			<td align="center">${grade.gdesc }</td>
			<td align="center"><a name="toUpdate" ids="${grade.id }" href="javascript:;"><input type="submit" value="修改" class="button" /></a>
			<a name="toDelete" ids="${grade.id }" href="javascript:;"><input type="submit" value="删除" class="button" /></a></td>
		</tr>
	</s:iterator>
  	</tbody>
</table>
</div>
		${pageString }
		<script language="javascript" type="text/javascript">
		 	$("[name='toUpdate']").click(function(){
	 			var id = $(this).attr("ids");
	 			var burl = document.URL;
	 			window.location.href = "/admin_back/toUpdateGrade.action?id="+id+"&backUrl="+burl;  
	 		});
		 	$("[name='toDelete']").click(function(){
 				if(confirm("确定要删除该用户吗？"))
				{
					var id = $(this).attr("ids");
		 			var burl = document.URL;
		 			window.location.href = "/admin_back/deleteGrade.action?id="+id+"&backUrl="+burl;  
				}
	 		});
		 	</script>
	</body>
</html>
