<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.pojo.*"%>
<%@page import="com.eypg.util.Struts2Utils"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
	<title>1元拍购_管理中心</title>
	<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
	<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
	<script language="javascript" type="text/javascript" src="/js/jquery-1.4.4-min.js"></script>
  </head>
  
  <body>
	<div class="header lr10"><a href="/admin_back/gradeListAll.action">代理等级列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/toAddUser.action">添加会员</a><span class="span_fenge lr5">|</span><a href="/admin_back/toUserConfigure.action">会员福利配置</a><span class="span_fenge lr5">|</span></div>
  <div class="bk10"></div>
  
<div class="table_form lr10">
<!--start-->
 <c:choose>
	<c:when test="${agentGrade!=null}">
		<form action="/admin_back/doAddOrUpdateGrade.action" method="post" enctype="multipart/form-data" style="border-radius: 0px;" class="form-horizontal group-border-dashed">
		<input type="hidden" name="agentGrade.id" value="${agentGrade.id }"/>
		<input type="hidden" name="backUrl" value="${backUrl }"/>
	</c:when>
	<c:otherwise>
		<form enctype="multipart/form-data" method="post" action="/admin_back/doAddOrUpdateGrade.action" name="myform" enctype="multipart/form-data">
		<input type="hidden" name="backUrl" value="${backUrl }"/>
	</c:otherwise>
</c:choose>
<input type="hidden" name="user.userType" value="0"/>
  <table width="100%" cellspacing="0">
  	 <tbody><tr>
			<td width="120" align="right">代理名：</td>
			<td><input type="text" class="input-text" value="${agentGrade.name }" name="agentGrade.name" /></td>
		</tr>
		<tr>
			<td width="120" align="right">佣金比例：</td>
			<td>
			<input type="text" class="input-text" value="${agentGrade.commissionRate }" name="agentGrade.commissionRate" />
			</td>
		</tr>
		<tr>
			<td width="120" align="right">保证金：</td>
			<td><input type="text" class="input-text" value="${agentGrade.bailMoney }" name="agentGrade.bailMoney" /></td>
		</tr>
		<tr>
			<td width="120" align="right">描述：</td>
			<td><textarea name="agentGrade.gdesc" style="width:400px;height:100px;">${agentGrade.gdesc }</textarea></td>
		</tr>
		<tr>
        	<td width="120" align="right"></td>
            <td>		
            <input type="submit" value="提交" name="submit" class="button" />
            <input type="button" value="返回" class="button"  onclick="history.go(-1)" />
            </td>
		</tr>
</tbody></table>
</form>
</div>
<script type="text/javascript">
	$("[name=submit]").click(function(){
		$("form:first").submit(); 
	});
</script>
  </body>
</html>
