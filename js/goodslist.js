var CBLFun = null;
$(document)
		.ready(
				function() {
					var g = $www;
					var k = $skin;
					var e = $("#topid").val();
					var d = $("#typeId").val();
					var j = $("#typeName").val();
					if (e == "hot20") {
						$("#hot20").attr("class", "current")
					} else {
						if (e == "date20") {
							$("#date20").attr("class", "current")
						} else {
							if (e == "price20") {
								$("#price20").attr("class", "current m-value");
								if (d != null && d != "") {
									$("#price20")
											.find("a")
											.attr(
													"href",
													$www + "/list/priceAsc20/"
															+ d + ".html")
											.html(
													'\u4ef7\u503c<s class="f-arrow-down"></s>')
								} else {
									$("#price20")
											.find("a")
											.attr(
													"href",
													$www
															+ "/list/priceAsc20.html")
											.html(
													'\u4ef7\u503c<s class="f-arrow-down"></s>')
								}
							} else {
								if (e == "priceAsc20") {
									$("#price20").attr("class",
											"current m-value m-value-default");
									if (d != null && d != "") {
										$("#price20")
												.find("a")
												.attr(
														"href",
														$www + "/list/price20/"
																+ d + ".html")
												.html(
														'\u4ef7\u503c<s class="f-arrow-top"></s>')
									} else {
										$("#price20")
												.find("a")
												.attr(
														"href",
														$www
																+ "/list/price20.html")
												.html(
														'\u4ef7\u503c<s class="f-arrow-top"></s>')
									}
								} else {
									if (e == "about20") {
										$("#about20").attr("class", "current")
									} else {
										if (e == "surplus20") {
											$("#surplus20").attr("class",
													"current")
										} else {
											if (e == "limit20") {
												$("#limit20").attr("class",
														"current")
											}
										}
									}
								}
							}
						}
					}
					var i = function() {
						var R = parseInt($("#hidSortID").val());
						var I = parseInt($("#hidBrandID").val());
						var ab = parseInt($("#hidPageIndex").val());
						var K = parseInt($("#hidOrder").val());
						var J = 0;
						var Z = 20;
						var V = 40;
						var U = V / Z;
						var T = 1;
						var O = 0;
						var aa = 0;
						var M = $("#divTopPageInfo");
						var L = $("#ulGoodsList");
						var E = $("#divPageNav");
						var W = $("#divLoadingLine");
						var H = false;
						var F = false;
						var G = false;
						var S = new Object();
						var X = $("#ulBrandList");
						var Q = X.height();
						var Y = X.children("li").length;
						var b = 28;
						var N = false;
						var c = function() {
							var n = b;
							var o = $(window).width() < 1190 ? 7 : 8;
							if (Y % o == 0) {
								n = (Y / o) * b
							} else {
								n = parseInt(Y / o + 1) * b
							}
							return n
						};
						$("#btnExpend")
								.click(
										function(n) {
											n.preventDefault();
											if (N) {
												X.height(Q + "px");
												$(this)
														.removeClass("hover")
														.html(
																'\u5c55\u5f00<div class="f-top-arrow"><cite>\u25c6</cite><b>\u25c6</b></div>')
											} else {
												X.height(c() + "px");
												$(this)
														.addClass("hover")
														.html(
																'\u6536\u8d77<div class="f-top-arrow"><cite>\u25c6</cite><b>\u25c6</b></div>')
											}
											N = !N
										});
						var a = $("div#ulGoodsList > .soon-list-con").each(
								function(n) {
									$(this).GoodsItemFun()
								})
					};
					i();
					$(".scrollLoading").scrollLoading();
					function l(a, b) {
						document.cookie = a + "=" + escape(b)
								+ ";id=1ypg;path=/;domain=" + $domain
					}
					function h(b, n, a) {
						var c = a;
						var o = new Date();
						o.setTime(o.getTime() + c * 24 * 60 * 60 * 1000);
						document.cookie = b + "=" + escape(n)
								+ ";id=1ypg;path=/;expires=" + o.toGMTString()
								+ ";domain=" + $domain
					}
					function f(b) {
						var a = document.cookie.match(new RegExp("(^| )" + b
								+ "=([^;]*)(;|$)"));
						if (a != null) {
							return unescape(a[2])
						}
						return null
					}
					function m(a) {
						var c = new Date();
						c.setTime(c.getTime() - 1);
						var b = f(a);
						if (b != null) {
							document.cookie = a + "=" + b
									+ ";id=1ypg;path=/;expires="
									+ c.toGMTString() + ";domain=" + $domain
						}
					}
				});
