<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
	<title>1元拍购_管理中心</title>
	<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
	<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="/css/dateinput.css" />
	<script type="text/javascript" src="/ueditor/editor_config.js"></script>
	<script type="text/javascript" src="/ueditor/editor_all.js"></script> 
	<script language="javascript" type="text/javascript" src="/js/jquery-1.4.4-min.js"></script>
  </head>
  
  <body>
<div class="header-title lr10">
	<b>QQ 登陆配置</b>
</div>
<div class="bk10"></div>
<div class="table_form lr10">	
<form id="myform" method="post" action="/admin_back/doSeoSet.action">

<table width="100%" class="lr10">
  <tbody><tr>
    <td width="100">开启QQ登陆</td>
    <td>
    <c:if test="${sysConfigure.qqAppStatus==0}">
		<input type="radio" checked="checked" value="0" name="sysConfigure.qqAppStatus" />开启
		<input type="radio" value="1" name="sysConfigure.qqAppStatus" />关闭
	</c:if>
	<c:if test="${sysConfigure.qqAppStatus==1}">
		<input type="radio" value="0" name="sysConfigure.qqAppStatus" />开启
		<input type="radio" checked="checked" value="1" name="sysConfigure.qqAppStatus" />关闭
	</c:if>
	</td>
  </tr>
  <tr>
    <td>QQ App id</td>
    <td><input type="text" value="${sysConfigure.qqAppId }" name="sysConfigure.qqAppId" class="input-text wid150" /></td>
  </tr>  
  <tr>
    <td>QQ App key</td>
    <td><input type="text" value="${sysConfigure.qqAppKey }" name="sysConfigure.qqAppKey" class="input-text wid250" />
	<a target="_blank" href="http://connect.qq.com/">点击注册</a>	
	</td>
  </tr> 
    <tr>
    <td>回调地址：</td>
    <td>
	${sysConfigure.wwwUrl }/qcback.html   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(你的域名/qcback.html )
	</td>
  </tr> 
	<tr>
    	<td width="100"></td> 
   		<td> <input type="submit" class="button" name="dosubmit" value=" 提交 " /></td>
    </tr>
</tbody></table>
</form>

</div><!--table-form end-->

<script>	
</script>

 </body>
</html>
