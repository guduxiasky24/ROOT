var ShareUrl = "";
var ShareTitle = "";
$(function() {
	var c = "http://skin.1ypg.com";
	var b = $("#hidRefTitle");
	var i = $("#txtInfo");
	var f = $("#resultCount").val();
	var a = 0;
	var e = $("#userId").val();
	var g = function() {
		var o = $www;
		o += "/share.html?uid=";
		var k = $("#btnCopy");
		ShareTitle = "我刚发现一个很好很好玩的网站，1元就能买IPhone 哦，快去看看吧！";
		var n = function() {
			if (b.val() == "") {
				b.val(ShareTitle)
			}
			i.val(b.val() + "\n" + ShareUrl);
			var p = function(r) {
				try {
					window.clipboardData.clearData();
					window.clipboardData.setData("Text", r);
					OKDialog("\u590d\u5236\u6210\u529f\uff01")
				} catch (q) {
				}
			};
			k
					.click(function() {
						if (/(msie\s|trident.*rv:)([\w.]+)/
								.test(navigator.userAgent.toLowerCase())) {
							var q = new RegExp("\n", "g");
							p(i.val().replace(q, ""))
						} else {
							$
									.PageDialog(
											'<dl class="sAltFail"><dd>\u5bf9\u4e0d\u8d77\uff0c\u60a8\u4f7f\u7528\u7684\u662f\u975eIE\u6838\u5fc3\u6d4f\u89c8\u5668\uff0c\u8bf7\u624b\u52a8\u590d\u5236\u5185\u5bb9\u3002</dd></dl>',
											{
												W : 408,
												H : 50,
												autoClose : true
											});
							i.select()
						}
					});
			k.show();
			$.getScript($skin + "/js/bdshare.js")
		};
		var j = $("#userId").val();
		if (parseInt(j) > 0) {
			var l = function() {
				return o + j
			};
			var m = function(q) {
				if (q.urls.length > 0 && q.urls[0].result) {
					ShareUrl = q.urls[0].url_short;
					n()
				}
			};
			$.get("/getshorturl.html?uid=" + l() + "&callback=?", m)
		} else {
			ShareUrl = o;
			n()
		}
	};
	g();
	function d() {
		$("#pageLoading").show()
	}
	$("#pagination").pagination(f, {
		current_page : a,
		prev_text : "\u4e0a\u4e00\u9875",
		next_text : "\u4e0b\u4e00\u9875",
		num_display_entries : 5,
		num_edge_entries : 1,
		link_to : "",
		prev_show_always : false,
		next_show_always : false,
		items_per_page : 12,
		callback : h
	});
	function h(j) {
		var k = "/user/InvitedListAjaxPage.action?pageNo=" + j + "&userId=" + e;
		$(".pageULEx").prepend(
				'<li class="total_page" id="pageLoading"><img src="' + $img
						+ '/Images/loding.gif" /></li>');
		$
				.ajax({
					url : k,
					type : "get",
					data : "json",
					beforeSend : d,
					success : function(m) {
						$("#divList").empty();
						if (f > 0) {
							$(
									'<ul class="listTitle"><li class="w200">\u7528\u6237\u540d</li><li class="w200">\u65f6\u95f4</li><li class="w180">\u9080\u8bf7\u7f16\u53f7</li><li>\u6d88\u8d39\u72b6\u6001</li></ul>')
									.appendTo("#divList");
							$(".pageULEx").show();
							$(".pageULEx").prepend(
									'<li class="total_page">\u9875\u6b21<i>'
											+ (j + 1) + "/" + Math.ceil(f / 12)
											+ "</i>&nbsp;&nbsp;\u5171<i>" + f
											+ "</i>\u6761\u8bb0\u5f55</li>");
							for ( var l = 0; l < m.length; l++) {
								$(
										'<ul><li class="w200"><a class="name-img" target="_blank" href="'
												+ $www
												+ "/u/"
												+ m[l].userId
												+ '.html"><img border="0" alt="" src="'
												+ m[l].faceImg
												+ '"></a><p><a class="blue" target="_blank" href="'
												+ $www
												+ "/u/"
												+ m[l].userId
												+ '.html">'
												+ m[l].userName
												+ '</a></p></li><li class="w200">'
												+ m[l].oldDate
												+ '</li><li class="w180">'
												+ m[l].userId + "</li><li>"
												+ m[l].experience / 10
												+ " \u5143</li></ul>")
										.appendTo("#divList")
							}
							$("#divInviteInfo").show();
							$("#pageLoading").hide()
						} else {
							$("#divInviteInfo").hide();
							$(
									'<ul class="listTitle"><li class="w200">\u7528\u6237\u540d</li><li class="w200">\u65f6\u95f4</li><li class="w180">\u9080\u8bf7\u7f16\u53f7</li><li>\u6d88\u8d39\u72b6\u6001</li></ul>')
									.appendTo("#divList");
							$(
									'<div class="tips-con"><i></i>\u65e0\u76f8\u5e94\u7684\u9080\u8bf7\u8bb0\u5f55</div>')
									.appendTo("#divList");
							$(".pageULEx").hide()
						}
					}
				})
	}
});
