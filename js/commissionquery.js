$(document)
		.ready(
				function() {
					var n = $("#resultCount").val();
					var u = 0;
					var f = $("#userId").val();
					var j = $("#divCommissionList");
					var h = $("[name=divTip]");
					var l = $("<ul></ul>");
					var b = $("#txtMisTime");
					var k = $("#txtMaxTime");
					var i = $("#btnSearch");
					var d = $("[class=record-cur]").attr("name");
					var s = new Date();
					var e = b.val();
					var o = k.val();
					$(".record-tab a").each(
							function(a, c) {
								$(this).bind(
										"click",
										function() {
											$(this).addClass("record-cur")
													.siblings().removeClass(
															"record-cur");
											d = $("[class=record-cur]").attr(
													"name");
											$("#divCommissionList").empty();
											m(d)
										})
							});
					$("#pagination").pagination(n, {
						current_page : u,
						prev_text : "\u4e0a\u4e00\u9875",
						next_text : "\u4e0b\u4e00\u9875",
						num_display_entries : 5,
						num_edge_entries : 1,
						link_to : "",
						prev_show_always : false,
						next_show_always : false,
						items_per_page : 12,
						callback : t
					});
					function t(a) {
						var c = "/user/CommissionQueryAjaxPage.action?pageNo="
								+ a + "&userId=" + f + "&selectTime=" + d
								+ "&startDate=" + e + "&endDate=" + o;
						$(".pageULEx").prepend(
								'<li class="total_page" id="pageLoading"><img src="'
										+ $img + '/Images/loding.gif" /></li>');
						$
								.ajax({
									url : c,
									type : "post",
									data : "json",
									beforeSend : g,
									success : function(v) {
										$("#divCommissionList").empty();
										if (n > 0) {
											$(
													'<ul class="listTitle"><li class="w140">\u7528\u6237</li><li class="w150">\u65f6\u95f4</li><li class="w280">\u63cf\u8ff0</li><li class="w90">'
															+ $shortName
															+ '\u91d1\u989d(\u5143)</li><li class="w90">\u4f63\u91d1(\u5143)</li></ul>')
													.appendTo(
															"#divCommissionList");
											$(".pageULEx").show();
											$(".pageULEx")
													.prepend(
															'<li class="total_page">\u9875\u6b21<i>'
																	+ (a + 1)
																	+ "/"
																	+ Math
																			.ceil(n / 12)
																	+ "</i>&nbsp;&nbsp;\u5171<i>"
																	+ n
																	+ "</i>\u6761\u8bb0\u5f55</li>");
											for ( var p = 0; p < v.length; p++) {
												$(
														'<ul><li class="w140">'
																+ v[p].userName
																+ '</li><li class="w150">'
																+ v[p].date
																+ '</li><li class="w280">'
																+ v[p].description
																+ '</li><li class="w90 orange">'
																+ v[p].buyMoney
																+ '</li><li class="w90 orange">'
																+ v[p].commission
																+ "</li></ul>")
														.appendTo(
																"#divCommissionList")
											}
											$("#pageLoading").hide()
										} else {
											$(
													'<ul class="listTitle"><li class="w140">\u7528\u6237</li><li class="w150">\u65f6\u95f4</li><li class="w280">\u63cf\u8ff0</li><li class="w90">'
															+ $shortName
															+ '\u91d1\u989d(\u5143)</li><li class="w90">\u4f63\u91d1(\u5143)</li></ul>')
													.appendTo(
															"#divCommissionList");
											$(
													'<div class="tips-con"><i></i>\u672a\u6709\u76f8\u5e94\u7684\u4f63\u91d1\u8bb0\u5f55</div>')
													.appendTo(
															"#divCommissionList");
											$(".pageULEx").hide()
										}
									}
								})
					}
					function q(a) {
						var c = "/user/CommissionQueryAjaxPage.action?pageNo="
								+ a + "&userId=" + f + "&startDate=" + e
								+ "&endDate=" + o;
						$(".pageULEx").prepend(
								'<li class="total_page" id="pageLoading"><img src="'
										+ $img + '/Images/loding.gif" /></li>');
						$
								.ajax({
									url : c,
									type : "post",
									data : "json",
									beforeSend : g,
									success : function(v) {
										$("#divCommissionList").empty();
										if (n > 0) {
											$(
													'<ul class="listTitle"><li class="w140">\u7528\u6237</li><li class="w150">\u65f6\u95f4</li><li class="w280">\u63cf\u8ff0</li><li class="w90">'
															+ $shortName
															+ '\u91d1\u989d(\u5143)</li><li class="w90">\u4f63\u91d1(\u5143)</li></ul>')
													.appendTo(
															"#divCommissionList");
											$(".pageULEx").show();
											$(".pageULEx")
													.prepend(
															'<li class="total_page">\u9875\u6b21<i>'
																	+ (a + 1)
																	+ "/"
																	+ Math
																			.ceil(n / 12)
																	+ "</i>&nbsp;&nbsp;\u5171<i>"
																	+ n
																	+ "</i>\u6761\u8bb0\u5f55</li>");
											for ( var p = 0; p < v.length; p++) {
												$(
														'<ul><li class="w140">'
																+ v[p].userName
																+ '</li><li class="w150">'
																+ v[p].date
																+ '</li><li class="w280">'
																+ v[p].description
																+ '</li><li class="w90 orange">'
																+ v[p].buyMoney
																+ '</li><li class="w90 orange">'
																+ v[p].commission
																+ "</li></ul>")
														.appendTo(
																"#divCommissionList")
											}
											$("#pageLoading").hide()
										} else {
											$(
													'<ul class="listTitle"><li class="w140">\u7528\u6237</li><li class="w150">\u65f6\u95f4</li><li class="w280">\u63cf\u8ff0</li><li class="w90">'
															+ $shortName
															+ '\u91d1\u989d(\u5143)</li><li class="w90">\u4f63\u91d1(\u5143)</li></ul>')
													.appendTo(
															"#divCommissionList");
											$(
													'<div class="tips-con"><i></i>\u672a\u6709\u76f8\u5e94\u7684\u4f63\u91d1\u8bb0\u5f55</div>')
													.appendTo(
															"#divCommissionList");
											$(".pageULEx").hide()
										}
									}
								})
					}
					function g() {
						$("#pageLoading").show()
					}
					var m = function(c) {
						var a = c;
						$
								.ajax({
									url : "/user/getCommissionQueryAjaxPageResultCount.action?pageNo="
											+ u
											+ "&selectTime="
											+ a
											+ "&userId=" + f
											+ "&level=" + level,
									type : "get",
									data : "String",
									success : function(p) {
										n = parseInt(p);
										$("#pagination").pagination(n, {
											current_page : u,
											prev_text : "\u4e0a\u4e00\u9875",
											next_text : "\u4e0b\u4e00\u9875",
											num_display_entries : 5,
											num_edge_entries : 1,
											link_to : "",
											prev_show_always : false,
											next_show_always : false,
											items_per_page : 12,
											callback : t
										})
									}
								})
					};
					i.click(function() {
						$(".record-tab a").attr("class", "");
						$("#divCommissionList").empty();
						r()
					});
					var r = function() {
						var c = b.val();
						var a = k.val();
						if (!IsValidDate(c)) {
							alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5f00\u59cb\u65e5\u671f!");
							return
						}
						if (!IsValidDate(a)) {
							alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7ed3\u675f\u65e5\u671f!");
							return
						}
						if (ConvertDate(a) < ConvertDate(c)) {
							alert("\u7ed3\u675f\u65e5\u671f\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65e5\u671f!");
							return
						}
						$
								.ajax({
									url : "/user/getCommissionQueryAjaxPageResultCount.action?pageNo="
											+ u
											+ "&userId="
											+ f
											+ "&startDate="
											+ c
											+ "&endDate="
											+ a,
									type : "get",
									data : "String",
									success : function(p) {
										n = parseInt(p);
										e = c;
										o = a;
										$("#pagination").pagination(n, {
											current_page : u,
											prev_text : "\u4e0a\u4e00\u9875",
											next_text : "\u4e0b\u4e00\u9875",
											num_display_entries : 5,
											num_edge_entries : 1,
											link_to : "",
											prev_show_always : false,
											next_show_always : false,
											items_per_page : 12,
											callback : q
										})
									}
								})
					};
					isLoaded = true;
					b.val(s.DateAdd("m", -1).Format("YYYY-MM-DD")).date_input();
					k.val(s.Format("YYYY-MM-DD")).date_input()
				});
