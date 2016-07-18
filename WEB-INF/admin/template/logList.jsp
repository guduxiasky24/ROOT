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
		<title>1元拍购_管理中心_日誌列表</title>
		<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
		<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
		<script type="text/javascript" src="/ueditor/editor_config.js"></script>
		<script type="text/javascript" src="/ueditor/editor_all.js"></script>
		<script language="javascript" type="text/javascript"
			src="/js/jquery-1.4.4-min.js"></script>
	</head>

	<body>
	<%-- <div class="header lr10"><a href="/admin_back/agentListAll.action?agentState=1">已审核列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/agentListAll.action?agentState=0">未审核列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/agentListAll.action?agentState=2">审核不通过</a><span class="span_fenge lr5">|</span></div> --%>
	<div class="bk10"></div>

<div class="header-data lr10">
 查询类型：
<select id="typeId" class="form-control selall" style="width:180px;">
<option value="">请选择</option>
<option value="userId">用户ID</option>
<option value="phone">手机</option>
</select>
<input type="text" value="" name="keyword" id="keyword" class="input-text wid200"/>
<input type="submit" value="搜索" id="search"  class="button btntip" />

</div>
<div class="bk10"></div>

<div class="table-list lr10">        
  <!--start-->
  <table width="100%" cellspacing="0">
    <thead>
		<tr>
            <th align="center">姓名</th>
            <th align="center">操作描述</th>
            <th align="center">类型</th>
            <th align="center">ip</th>
            <th align="center">地理位置</th>
            <th align="center">操作时间</th>
		</tr>
    </thead>
    <tbody>
    
    <s:iterator value="logList" var="log" status="st">
		<tr class="gradeA even">
			<td align="center">${log.name }</td>
			<td align="center">
			<s:if test="ldesc.length() lt 35">${log.ldesc.trim()}</s:if>
						<s:else><s:property value="ldesc.trim().substring(0,35)"/>...<a href='javascript:;' onclick="showThis(this)">查看更多</a></s:else>
			<span style="display:none;">${log.ldesc.trim()}</span>
			</td>
			<td align="center">
			${log.type=='admin'?'系统后台日志':log.type=='user'?'用户后台日志':'其它日志' }
			</td>
			<td align="center">
			${log.ip}
			</td>
			<td align="center">
			${log.location}
			</td>
			<td align="center">${log.addTime}</td>
		</tr>
	</s:iterator>
  	</tbody>
</table>
</div>
		${pageString }
		 	<script language="javascript" type="text/javascript">
		 	$("[name='toUpdateFail']").click(function(){
		 	var ids = $(this).attr("ids");
	 			window.location.href = "/admin_back/updateAgent.action?id="+ids+"&agentState=2";  
	 		});
	 		$("[name='toUpdatePass']").click(function(){
	 			var ids = $(this).attr("ids");
	 			window.location.href = "/admin_back/updateAgent.action?id="+ids+"&agentState=1";  
	 		});
	 		$("#search").click(function(){
	 			var typeId = $("#typeId").val();
	 			var keyword = $("#keyword").val();
	 			window.location.href = "/admin_back/logListAll.action?typeId="+typeId+"&keyword="+keyword;
	 		});
	 		function showThis(obj){
	 			alert($(obj).next("span").html());
	 		}
		 	</script>
	</body>
</html>
