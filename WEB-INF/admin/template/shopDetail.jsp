<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.pojo.User"%>
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
  
<div class="table_form lr10">
<!--start-->
  <table width="100%" cellspacing="0">
  	 <tbody><tr>
			<td width="120" align="right">店铺名称：</td>
			<td>${agentShop.name }</td>
		</tr>
		<tr>
			<td width="120" align="right">代理等级：</td>
			<td>${agentGrade.name }</td>
		</tr>
		<tr>
			<td width="120" align="right">申请时间：</td>
			<td>${agentShop.addTime }</td>
		</tr>
		<tr>
			<td width="120" align="right">开始时间：</td>
			<td>${agentShop.startTime }</td>
		</tr>
		<tr>
			<td width="120" align="right">结束时间：</td>
			<td>${agentShop.endTime }</td>
		</tr>
		<tr>
			<td width="120" align="right">保证金：</td>
			<td>${agentShop.deposit }</td>
		</tr>
		<tr>
			<td width="120" align="right">保证金状态：</td>
			<td>${agentShop.depositState==1?'正常':'申请退回' }</td>
		</tr>
		<tr>
			<td width="120" align="right">分拥比例：</td>
			<td>${agentGrade.commissionRate }</td>
		</tr>
		<tr>
        	<td width="120" align="right"></td>
            <td>
            <input type="button" value="返回" class="button"  onclick="history.go(-1)" />
            </td>
		</tr>
</tbody></table>
</div>
  </body>
</html>
