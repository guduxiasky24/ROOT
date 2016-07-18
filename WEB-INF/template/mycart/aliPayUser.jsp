<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="com.eypg.util.ApplicationListenerImpl"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta name="decorator" content="template_footer" />
    <title>���ﳵ_<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%> һԪ<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %> <%=ApplicationListenerImpl.sysConfigureJson.getShortName() %>��</title>
    <link rel="stylesheet" type="text/css" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/cartlist.css" />
    <link rel="stylesheet" type="text/css" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/payjcb.css" />
 <style>
.ui-dialog {
	height: auto;
}
.ui-fm-item{
	height:120px;
}
#tips{
	display:none;
}
.ui-button-waiting,.ui-button-waiting:hover{
	background: #989898;
}


</style>
  </head>
  <body>
  <div class="ui-dialog">
	<div class="d-top" style=""><span class="title">֧��������</span><a id="closeLayer" class="close closeLayer" href="javascript:;">��</a></div>
	<div class="d-cnt">
		<div class="order-header fn-clear">
			<s:if test="%{orderError == null}">
			<div class="order-spending alignr pr20">
				<span class="icon-spending">
					<h3 class="ft-12">������Ԫ��</h3>
					<span id="spending" class="ft-red ft-18 fm-yahei fb mr10">${moneyCount }.00</span>
					<span></span>
				</span>
			</div>
			</s:if>
			<ul class="order-detail">
				<s:if test="%{orderError == null}">
				<li><span>������ʹ�á�֧���������н���</span></li>
				<li><strong class="ft-14">��Ʒ���ƣ�<s:property value="saitName"/></strong></li>
				<li>����ʱ�䣺${currTime }</li>
				</s:if>
				<s:else>
				<li>
					<strong class="ft-14">
						<span style="color:red;font-weight:bold">��Ϣ��ʾ��</span>
						<s:property value="orderError"/>
					</strong>
				</li>
				</s:else>
			</ul>
		</div>
		<div class="ptb40">
			<form action="https://shenghuo.alipay.com/send/payment/fill.htm" method="post" target="_blank" id="msgPayForm" class="msg-pay-form">
				<input name="optEmail" id="optEmail"  value="<%=ApplicationListenerImpl.sysConfigureJson.getAliPayUser()%>"  type="hidden" />
				<input name="payAmount" id="payAmount" value="${moneyCount }" type="hidden" />
				<input name="title" id="title" value="${out_trade_no }" type="hidden" />
				<input name="memo" id="memo" value="�벻Ҫ�޸ĸ������˵�����ݣ�����Ӱ��ϵͳ��������" type="hidden" />

				<div class="ui-fm-item">
					<div class="item-div">
						<strong>֧���������벻Ҫ�޸�[������]��[����˵��]��������ɶ�������ʧ�ܡ�</strong><br />
						������������ϵ<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%>�ͷ����ͷ��绰��<%=ApplicationListenerImpl.sysConfigureJson.getServiceTel()%> �ͷ�QQ��<%=ApplicationListenerImpl.sysConfigureJson.getServiceQq()%><br />
						<span id="tips">�������ʧ�ܣ������������·��𸶿������ɺ��������ȴ���ϵͳ���������Զ��رո�ҳ�档</span>
					</div>
				</div>

				<div class="item-txt">
					<s:if test="%{orderError == null}">
					<a class="ui-button-mred J-formSubmit J-forRisk" id="submit">��������</a>
					</s:if>
					<a class="ui-button-mwhite J-formSubmit J-forRisk" id="cancel" style="margin-left:20px;">����</a>
				</div>
			</form>
		</div>
	</div>
</div>
<input type="hidden" id="payName" name="payName" value="${payName }" />
<div class="divcover" style="z-index: 998; width: 100%; height: 100%;"></div>
<!--	<script>document.payForm.submit();</script>-->

<script>

$(function(){

    var posTimmer;
	var $win = $(window);
	var $dialog = $('.ui-dialog');
	$win.resize(function(){
        posTimmer && clearTimeout(posTimmer);
		posTimmer = setTimeout(function(){
			var winHeight = $win.height();
			var height = $dialog.height();
			if (height >= winHeight) {
				$dialog.css('margin-top', '0px');
			} else {
				$dialog.css('margin-top', (winHeight - height) / 2);
			}
			$dialog.css('visibility', 'visible');
        }, 300);
	}).trigger('resize');

	var $submit = $('#submit');
	$submit.click(function(){
		$submit.text('���ڵȴ�����벻Ҫˢ�¸�ҳ��...').addClass('ui-button-waiting');
		$submit.unbind('click');
		$('#tips').show().css('color','red');

		setInterval(function(){
		  $.ajax({
			url:"/alipay/noKeyRechargeReturn.html",
			type: "post",
			data: {tradeNo:$("#title").val(),payName:$("#payName").val()},
			success: function(d){
				if(d == "success" ){
					$submit.text('����ɹ�');
					setTimeout(function(){
						if ( 0 ) {
							location.replace("/user/UserBalance.html");
						} else {
							if (window.opener) {
								window.opener.location.href = "/user/UserBalance.html";
								window.close();
							} else {
								location.replace("/user/UserBalance.html");
							}
						}
					},1000);
				}else if(d=="buySuccess"){
					location.replace("/mycart/shopok.html?id="+$("#title").val());
				}
			}
		  });
		},3000);
		$('#msgPayForm').submit();
	});

	$('#closeLayer,#cancel').click(function(){
		if ( 0 ) {
			history.go(-1);
		} else {
			if (window.opener) {
				window.close();
			} else {
				location.replace("/user/UserBalance.html");
			}
		}
	});
});


</script>
</body>
</html>
