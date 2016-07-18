<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.util.ApplicationListenerImpl"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>1元拍购_管理中心</title>
<link href="/admin_css/global.css" rel="stylesheet" type="text/css" />
<link href="/admin_css/admin_style.css" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="/js/jquery-1.4.4-min.js"></script>
</head>

<body>
	<div class="header lr10">
		<a href="/admin_back/userListAll.action">会员列表</a><span class="span_fenge lr5">|</span><a href="/admin_back/toAddUser.action">添加会员</a><span class="span_fenge lr5">|</span><a href="/admin_back/toUserConfigure.action">会员福利配置</a><span class="span_fenge lr5">|</span><a href="/admin_back/toUserWelfare.action">福利大放送配置</a><span class="span_fenge lr5">|</span>
	</div>
	<div class="bk10"></div>
	<div class="table_form lr10">
		<form id="myform" method="post" action="/admin_back/doSeoSet.action">

			<table width="100%" class="lr10">
				<tbody>
					<tr>
						<td width="150px;">最新活动：</td>
						<td><input type="text" value="${sysConfigure.newActivity }" size="10" name="sysConfigure.newActivity"  class="input-text" />会员参加活动后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">了解幸运go：</td>
						<td><input type="text" value="${sysConfigure.knowXYGO }" size="10" name="sysConfigure.knowXYGO" class="input-text" /><!--  - <input type="text" value="" size="10" name="" class="input-text" /> -->会员了解新手指南后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">每日红包：</td>
						<td><input type="text" value="${sysConfigure.everyMoney }" size="10" name="sysConfigure.everyMoney" class="input-text" /><!--  - <input type="text" value="" size="10" name="" class="input-text" /> -->会员每日登录后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">每日分享：</td>
						<td><input type="text" value="${sysConfigure.everyShare }" size="10" name="sysConfigure.everyShare" class="input-text" /> <!-- - <input type="text" value="" size="10" name="" class="input-text" /> -->会员每日分享后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">关注幸运go：</td>
						<td><input type="text" value="${sysConfigure.xygzGo }" size="10" name="sysConfigure.xygzGo" class="input-text" />会员关注幸运go后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">成功微信或余额支付一次：</td>
						<td><input type="text" value="${sysConfigure.successPay }" size="10" name="sysConfigure.successPay" class="input-text" /> <!-- - <input type="text" value="" size="10" name="" class="input-text" /> -->会员成功微信或余额支付一次后送多少幸运币！(默认请填写0.0)</td>
					</tr>
					<tr>
						<td width="150px;">获得好友消费返利：</td>
						<td><input type="text" value="${sysConfigure.getGfPay }" size="10" name="sysConfigure.getGfPay" class="input-text" />会员邀请好友消费后送多少幸运币！(默认请填写0%)</td>
					</tr>
					<tr>
						<td width="100"></td>
						<td><input type="submit" value=" 提交 " class="button btntip" /> <input type="button" value="返回" class="button btntip" onclick="history.go(-1)" /></td>
					</tr>
				</tbody>
			</table>
			<p style="color:red;">以上信息必须填写，不能为空，否则影响系统正常运行。</p>
		</form>
	</div>
	<script type="text/javascript">
		var b = function(w) {
			var x = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			return x.test(w);
		};
		$("#sendTestMail").click(function() {
			var G = $("#testMailName").val();
			if (!(b(G))) {
				alert("请输入正常的邮箱地址！");
				return false;
			}
			$.ajax({
				url : "/admin_back/doTestMail.action",
				type : "POST",
				data : "userName=" + G,
				success : function(data) {
					if (data == "mailError") {
						alert("请先配置系统邮箱及系统邮箱密码！");
					} else if (data == "success") {
						alert("发送成功！请进入邮箱查收！");
					} else {
						alert("发送失败，请核对邮箱！");
					}
				},
				error : function() {
					alert("请求异常，请联系管理员！");
				}
			});
		});
	</script>
</body>
</html>
