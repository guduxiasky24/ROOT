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
		<title>1元拍购_管理中心_代理商列表</title>
		<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
		<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
		<script type="text/javascript" src="/ueditor/editor_config.js"></script>
		<script type="text/javascript" src="/ueditor/editor_all.js"></script>
		<script language="javascript" type="text/javascript"
			src="/js/jquery-1.4.4-min.js"></script>
	</head>

	<body>
	<div class="header lr10"><a href="/admin_back/agentListAll.action?agentState=1">已审核列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/agentListAll.action?agentState=0">未审核列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/agentListAll.action?agentState=2">审核不通过</a><span class="span_fenge lr5">|</span></div>
	<div class="bk10"></div>

<div class="header-data lr10">
 查询类型：
<select id="typeId" class="form-control selall" style="width:180px;">
<option value="">请选择</option>
<option value="userId">用户ID</option>
<option value="userName">用户昵称</option>
<option value="mail">邮箱</option>
<option value="phone">手机</option>
</select>
<input type="text" value="" name="keyword" id="keyword" class="input-text wid200"/>
<input type="submit" value="搜索" id="search"  class="button btntip" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排序：
<select id="orderName" class="form-control selall" style="width:180px;">
<option value="">请选择</option>
<option value="oldDate">注册时间</option>
<option value="balance">用户余额</option>
<option value="commissionPoints">福分</option>
<option value="experience">经验值</option>
</select>
</div>
<div class="bk10"></div>

<div class="table-list lr10">        
  <!--start-->
  <table width="100%" cellspacing="0">
    <thead>
		<tr>
            <th align="center">UID</th>
            <th align="center">用户名</th>
            <th align="center">邮箱</th>
            <th align="center">手机</th>
            <th align="center">余额</th>
			<th align="center">福分</th> 
			<th align="center">经验值</th>			
			<th align="center">登陆地址、IP</th>
			<th align="center">注册时间</th>		
			<th align="center">最新登录时间</th>
			<th align="center">代理商状态</th>
            <th align="center">管理</th>
		</tr>
    </thead>
    <tbody>
    
    <s:iterator value="userList" var="users" status="st">
		<tr class="gradeA even">
			<td align="center">${users.userId }</td>
			<td align="center">
			${users.userName }
			<c:if test="${users.attribute22!=null}">
				<span style="color:#0c0;" title="QQ用户">[QQ]</span>
			</c:if>
			</td>
			<td align="center">
			<c:if test="${users.mail!=null}">
				<c:if test="${fn:indexOf(users.mail,'@')!=-1}">
					${fn:substring(users.mail,0,3)}****${fn:substring(users.mail,fn:indexOf(users.mail,'@'),fn:length(users.mail))}
				</c:if>
			</c:if>
			<c:choose>
				<c:when test="${users.mailCheck==0}">
					<span style="color:#0c0" title="已验证">√</span>
				</c:when>
				<c:otherwise>
					<span style="color:red" title="未验证">×</span>
				</c:otherwise>
			</c:choose>
			</td>
			<td align="center">
			<c:if test="${users.phone!=null}">
			${fn:substring(users.phone,0,3)}****${fn:substring(users.phone,7,11)}
			</c:if>
			<c:choose>
				<c:when test="${users.mobileCheck==0}">
					<span style="color:#0c0" title="已验证">√</span>
				</c:when>
				<c:otherwise>
					<span style="color:red" title="未验证">×</span>
				</c:otherwise>
			</c:choose>
			</td>
			<td align="center">${users.balance }</td>
			<td align="center">${users.commissionPoints }</td>
			<td align="center">${users.experience }</td>
			<td align="center">${users.ipLocation }(${users.ipAddress })</td>
			<td align="center">${users.oldDate }</td>
			<td align="center">${users.newDate }</td>
			<td align="center">${users.agentState=='1'?'已通过':users.agentState=='2'?'不通过':users.agentState=='0'?'未审核':''}</td>
			<td align="center">
			<a name="toUpdate" ids="${users.userId }" href="javascript:;"><input type="submit" value="修改" class="button btntip" /></a>
			<c:if test="${users.agentState=='1'}">
			<a name="toUpdateFail" ids="${users.userId }" href="javascript:;"><input type="submit" value="不通过" class="button btntip" /></a>
			</c:if>
			<c:if test="${users.agentState=='0'||users.agentState=='2'}">
			<a name="toUpdatePass" ids="${users.userId }" href="javascript:;"><input type="submit" value="通过" class="button btntip" /></a>
			</c:if>
			<a name="toShopDetail" ids="${users.userId }" href="javascript:;"><input type="submit" value="详情" class="button btntip" /></a>
			</td>
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
	 			window.location.href = "/admin_back/agentListAll.action?typeId="+typeId+"&keyword="+keyword;
	 		});
	 		$("#orderName").change(function(){
	 			var typeName = $("#orderName").val();
	 			window.location.href = "/admin_back/agentListAll.action?typeName="+typeName;
	 		});
	 		$("[name='toUpdate']").click(function(){
	 			var id = $(this).attr("ids");
	 			var burl = document.URL;
	 			window.location.href = "/admin_back/toUpdateUser.action?id="+id+"&backUrl="+burl;  
	 		});
	 		$("[name='toShopDetail']").click(function(){
	 			var id = $(this).attr("ids");
	 			var burl = document.URL;
	 			window.location.href = "/admin_back/toShopDetail.action?id="+id+"&backUrl="+burl;  
	 		});
		 	</script>
	</body>
</html>
