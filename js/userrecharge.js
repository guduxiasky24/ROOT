$(function() {
	var d = $skin;
	var c = function() {
		var k = "";
		var a = $("#submit_ok");
		var l = $("#Money");
		var b = $("#txtOtherMoney");
		var p = function(f, e) {
			var g = function() {
				$("#btnReSelect", "#pageDialog").bind("click", function() {
					$.PageDialog.close()
				})
			};
			$.PageDialog($("#payAltBox").html(), {
				W : 350,
				H : 180,
				title : "\u5145\u503c\u63d0\u9192",
				ready : g
			})
		};
		var n = function(e) {
			if (/^\d{3,4}$/.test(k)) {
				$("#hidPayName").val("Chinabank");
				$("#hidPayBank").val(k)
			} else {
				$("#hidPayName").val(k);
				$("#hidPayBank").val("0")
			}
			$("#hidMoney").val(e);
			p()
		};
		$("#btnCXK").click(
				function() {
					$(this).addClass("tab_btn_hover").next("a").removeClass(
							"tab_btn_hover");
					$("ul.payment").eq(0).show().next("ul").hide()
				});
		$("#btnXYK").click(
				function() {
					$(this).addClass("tab_btn_hover").prev("a").removeClass(
							"tab_btn_hover");
					$("ul.payment").eq(1).show().prev("ul").hide()
				});
		$("#ulMoneyList").find("li").each(
				function() {
					var e = $(this);
					e.hover(function() {
						var f = e.find("input[type='radio']");
						if (!f.attr("checked")) {
							e.addClass("rdoCheck")
						}
					}, function() {
						e.removeClass("rdoCheck")
					});
					e.click(function() {
						$(this).addClass("selected").siblings().removeClass(
								"selected");
						var f = $(this).find("input[type='radio']");
						f.attr("checked", true);
						var h = f.val();
						if (h == 0) {
							b.focus();
							var g = b.val();
							l.html(g == "" ? "0" : g)
						} else {
							l.html(h);
							b.val("")
						}
					})
				});
		var o = function() {
			var e = b.val();
			if (e == "") {
				l.html(0)
			} else {
				if (isNaN(parseInt(e)) || e == "0") {
					if (l.html() == "0") {
						b.val("")
					} else {
						b.val(l.html())
					}
				} else {
					l.html(parseInt(e))
				}
			}
		};
		b.focus(function() {
			$("#rdOther").attr("checked", true)
		}).bind("keyup", function(e) {
			o();
			var f = (window.event) ? event.keyCode : e.keyCode;
			if (f == 13) {
				a.focus()
			}
		});
		var m = false;
		a
				.click(function() {
					var e = l.html();
					$("#moneyCount").val(e);
					$("#bankMoney").val(e);
					if (isNaN(parseInt(e)) || e == "0") {
						FailDialog("\u8bf7\u9009\u62e9\u6216\u8f93\u5165\u5145\u503c\u91d1\u989d!");
						b.focus();
						return false
					}
					$("input[name=account]").each(function(g, h) {
						if ($(h).attr("checked")) {
							m = true;
							k = $(this).val()
						}
					});
					if (m == false) {
						FailDialog("\u8bf7\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f\uff01");
						return false
					}
					if (k == "jdpay") {
						var f = function() {
							WYPLUS.open({
								formId : "submit_ok",
								iframeId : "iframeLayer"
							})
						};
						$.getScript(d + "/js/wyplusctrl.js?date=20150520", f);
						return false
					} else {
						n(l.html())
					}
					return k != ""
				})
	};
	$.getScript(d + "/js/ajaxfun.js?date=20130123", c)
});
