var PagePOPLoginOK = null;
$(document)
		.ready(
				function() {
					var d = $("#userPayType").val();
					var b = function() {
						var h = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u90e8\u5206\u5546\u54c1\u53c2\u4e0e\u4eba\u6b21\u5df2\u8fbe\u4e0a\u9650\uff01</div>';
						$.PageDialog(h, {
							W : 258,
							H : 65,
							close : false,
							autoClose : true
						})
					};
					if (d == "0") {
						b()
					}
					var g = $www;
					var a = function() {
						var h = $.cookie("_cartTips");
						if (h != "1"
								&& parseInt($("#hidTotalMoney").val()) > 100) {
							$("#divTips").show()
						} else {
							$("#divTips").hide()
						}
					};
					var c = $("#divEmpty");
					var f = function() {
						if (c.length > 0) {
							var h = "<b></b>"
									+ ($("#hidLogined").val() == "0" ? '<span>\u5982\u679c\u60a8\u8fd8\u672a\u767b\u5f55\uff0c\u53ef\u80fd\u5bfc\u81f4\u8d2d\u7269\u8f66\u4e3a\u7a7a\uff0c\u8bf7<a href="/login/index.html?forward=mycart">\u9a6c\u4e0a\u767b\u5f55</a></span>'
											: '<span>\u60a8\u7684\u8d2d\u7269\u8f66\u4e3a\u7a7a\uff01<a href="/" title="\u7acb\u5373\u53bb'
													+ $shortName
													+ '>>">\u7acb\u5373\u53bb'
													+ $shortName
													+ '<em class="f-tran">>></em></a></span>');
							c.html(h)
						} else {
							c.empty()
						}
					};
					f();
					var e = function() {
						var l = true;
						var v = $("#divCartBox");
						var n = $("#dlCartList");
						var j = $("#pageDialog");
						var k = $("#iTotalMoney");
						var m = $("#btnGoPay");
						var w = parseInt($("#hidCartState").val());
						var x = '<b class="z-comms"></b>';
						var r = function(C, y, B) {
							var z = "";
							switch (C) {
							case "selGoodsState":
								z = '<div class="z-popUp z-pop-box"><span class="gray3">\u90e8\u5206\u5546\u54c1\u5df2\u5931\u6548\uff0c\u7ee7\u7eed'
										+ $shortName
										+ '\uff1f</span><a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
								var A = function() {
									j.find("a.z-btn-determine").click(
											function() {
												y();
												return false
											});
									j.find("a.z-btn-cancel").click(function() {
										alert(111);
										return false
									})
								};
								$.PageDialog(z, {
									W : 410,
									H : 170,
									close : true,
									autoClose : false,
									ready : A
								});
								break;
							case "allOutDate":
								z = '<div class="z-popUp z-pop-box"><span class="gray3">\u60a8\u7684\u8d2d\u7269\u8f66\u4e2d\u6240\u6709\u5546\u54c1\u5df2\u5931\u6548\uff01</span><a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u6e05\u7a7a\u8d2d\u7269\u8f66\u5e76\u8fd4\u56de'
										+ $shortName
										+ '" class="z-btn-determine">\u6e05\u7a7a\u8d2d\u7269\u8f66\u5e76\u8fd4\u56de'
										+ $shortName + "</a></div>";
								var A = function() {
									j.find("a.z-btn-cancel").click(function() {
										$.PageDialog.close();
										return false
									});
									j.find("a.z-btn-determine").click(
											function() {
												y();
												return false
											})
								};
								$.PageDialog(z, {
									W : 512,
									H : 197,
									close : true,
									autoClose : false,
									ready : A
								});
								break;
							case "delNone":
								z = '<div class="z-popUp z-pop-box"><span class="gray3">\u8bf7\u9009\u62e9\u8981\u5220\u9664\u7684\u5546\u54c1\uff01</span><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
								var A = function() {
									j.find("a.z-btn-determine").click(
											function() {
												$.PageDialog.close();
												return false
											})
								};
								$.PageDialog(z, {
									W : 350,
									H : 197,
									close : true,
									autoClose : false,
									ready : A
								});
								break;
							case "delCart":
								z = '<div class="z-popUp z-pop-box"><span class="gray3">\u786e\u5b9a\u8981\u5220\u9664\u6240\u9009\u7684\u5546\u54c1\uff1f</span><a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
								var A = function() {
									j.find("a.z-btn-determine").click(
											function() {
												y();
												return false
											});
									j.find("a.z-btn-cancel").click(function() {
										$.PageDialog.close();
										return false
									})
								};
								$.PageDialog(z, {
									W : 398,
									H : 197,
									close : true,
									autoClose : false,
									ready : A
								});
								break;
							case "delCartOut":
								z = '<div class="z-popUp z-pop-box"><span class="gray3">\u786e\u5b9a\u8981\u5220\u9664\u6240\u6709\u5931\u6548\u5546\u54c1\uff1f</span><a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
								var A = function() {
									j.find("a.z-btn-determine").click(
											function() {
												y();
												return false
											});
									j.find("a.z-btn-cancel").click(function() {
										$.PageDialog.close();
										return false
									})
								};
								$.PageDialog(z, {
									W : 398,
									H : 197,
									close : true,
									autoClose : false,
									ready : A
								});
								break;
							case "delCartS":
								z = '<div class="z-popUp z-add-success"><i class="z-arrows"></i>\u5220\u9664\u6210\u529f\uff01</div>';
								$.PageDialog(z, {
									W : 168,
									H : 65,
									close : false,
									autoClose : true,
									autoTime : 1000,
									submit : y
								});
								break;
							case "delCartF":
								z = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u62b1\u6b49\uff0c\u5220\u9664\u5931\u8d25\uff01</div>';
								$.PageDialog(z, {
									W : 180,
									H : 65,
									close : false,
									autoClose : true,
									autoTime : 1000,
									submit : y
								});
								break;
							case "buyNumErr":
								z = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u5bf9\u4e0d\u8d77\uff0c\u8d2d\u4e70\u4eba\u6b21\u8f93\u5165\u6709\u8bef\uff01</div>';
								$.PageDialog(z, {
									W : 258,
									H : 65,
									close : false,
									autoClose : true
								});
								break;
							case "selEmpty":
								z = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u5bf9\u4e0d\u8d77\uff0c\u8d2d\u7269\u8f66\u4e2d\u6ca1\u6709\u9009\u4e2d\u7684\u5546\u54c1\uff01</div>';
								$.PageDialog(z, {
									W : 310,
									H : 65,
									close : false,
									autoClose : true
								});
								break;
							case "goodsOff":
								z = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u5df2\u6ee1\u5458\uff0c\u8bf7\u9009\u62e9\u4e0b\u4e00\u671f\uff01</div>';
								$.PageDialog(z, {
									W : 420,
									H : 65,
									close : false,
									autoClose : true,
									submit : y
								});
								break;
							case "addCartS":
								z = '<div class="z-popUp z-add-success"><i class="z-arrows"></i>\u6dfb\u52a0\u6210\u529f\uff01</div>';
								$.PageDialog(z, {
									W : 168,
									H : 65,
									close : false,
									autoClose : true,
									autoTime : 1000,
									obj : B,
									oL : -60,
									oT : -50,
									ready : function() {
										$("#pageDialogBG").hide()
									},
									submit : y
								});
								break;
							case "addCartF":
								z = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u62b1\u6b49\uff0c\u6dfb\u52a0\u5931\u8d25\uff01</div>';
								$.PageDialog(z, {
									W : 180,
									H : 65,
									close : false,
									autoClose : true,
									autoTime : 1000,
									obj : B,
									oL : -60,
									oT : -50,
									ready : function() {
										$("#pageDialogBG").hide()
									},
									submit : y
								});
								break
							}
						};
						var p = function() {
							var y = 0;
							$("input:text[name=num]")
									.each(
											function() {
												var C = parseInt($(this).val());
												var B = $(this).parent()
														.parent().parent();
												var A = $("p[class='ts']", B);
												var z = $("a[type='check']", B);
												if (z.find("b").length > 0
														&& !isNaN(C)
														&& $(this).attr(
																"outdate") != 1) {
													y += C
												}
											});
							k.html("\uffe5" + y + ".00");
							$("#hidTotalMoney").val(y)
						};
						var t = function() {
							var y = true;
							n.find('a[type="check"]').each(function() {
								if (!$(this).find("b").length > 0) {
									y = false;
									return
								}
							});
							if (y) {
								u.html(x)
							} else {
								u.html("")
							}
						};
						var i = function(y) {
							if (y && y.stopPropagation) {
								y.stopPropagation()
							} else {
								window.event.cancelBubble = true
							}
						};
						$.fn.CartItemFun = function() {
							var U = $(this);
							var z = parseInt(U.attr("codeid"));
							var M = U.find('a[type="check"]');
							M.click(function() {
								var W = $(this).find("b").length > 0;
								if (W) {
									$(this).html("")
								} else {
									$(this).html(x)
								}
								t();
								if ($(this).attr("isvalid") == "1") {
									p()
								}
								return false
							});
							var P = parseInt(M.attr("isValid")) == 1;
							if (P) {
								var N = U.find('input[type="text"]');
								var O = N.prev("a");
								var I = N.next("a");
								var J = /^\d+$/;
								var C = parseInt(N.val());
								var B = parseInt(N.attr("surplus"));
								var A = parseInt(N.attr("limitbuy"));
								var y = parseInt(N.attr("myLimitSales"));
								var sp = parseInt(N.attr("singlePrice"));
								var F = A - y;
								var T = function(W) {
									if (!J.test(W)) {
										C = 1;
										U.find("li.f-cart-subtotal").html(
												"\uffe51.00");
										G();
										p();
										return
									}
									var count = parseInt(B);
									var codeid = z;
									var json = getCookie("products");
									W = Math.ceil(W/sp)*sp;
									if(sp > count||W > count){
										W = count;
									}
									if (json == null || json == "") {
										var val = "[{'pId':" + codeid
												+ ",'num':" + W + "}]";
										SetCookieByExpires("products", val, 5)
									} else {
										var flag = false;
										json = eval("(" + json + ")");
										$.each(json, function(n, value) {
											if (codeid == value.pId) {
												value.num = parseInt(W);
												if (parseInt(W) > count) {
													value.num = count
												}
												flag = true
											}
										});
										if (!flag) {
											json.push({
												pId : +codeid,
												num : W
											})
										}
										json = JSON.stringify(json);
										SetCookieByExpires("products", json, 5)
									}
									C = W;
									N.val(W);
									U.find("li.f-cart-subtotal").html(
											"\uffe5" + W + ".00");
									G();
									p()
								};
								var V = function(W) {
									if (W == "") {
										N.parent().next("p").hide()
									} else {
										if (N.parent().next("p").length == 0) {
											N.parent()
													.after("<p>" + W + "</p>")
										} else {
											N.parent().next("p").html(W).show()
										}
									}
								};
								var H = function() {
									if (A > 0) {
										var W = "\u9650\u8d2d" + A
												+ "\u4eba\u6b21";
										if (F > 0 && y > 0) {
											W = "\u9650\u8d2d"
													+ A
													+ "\u4eba\u6b21\uff0c\u60a8\u5df2\u53c2\u4e0e"
													+ y + "\u4eba\u6b21"
										}
										if (N.parent().next("p").length == 0) {
											N.parent().after(
													'<p class="gray9">' + W
															+ "</p>")
										} else {
											N.parent().next("p").addClass(
													"gray9").html(W).show()
										}
									} else {
										N.parent().next("p").hide()
									}
								};
								H();
								var L = function(W) {
									if (W) {
										if (U.next("div.m-list-tips").length == 0) {
											var X = '<div class="m-list-tips clrfix"><span class="fl orange">\u6e29\u99a8\u63d0\u793a\uff1a\u5df2\u8d85\u8fc7100\u4eba\u6b21\uff0c'
													+ $saitName
													+ "\u5c31\u662f\u82b11\u5143\u5c31\u6709\u53ef\u80fd\u4e70\u52301\u4ef6\u5546\u54c1\uff0c\u662f\u4e00\u79cd\u5206\u4eab\u5f0f\u8d2d\u7269\u5e73\u53f0\uff0c\u53ef\u80fd\u5e26\u6765\u8d85\u503c\u56de\u62a5\u7684\u540c\u65f6\u4e5f\u5b58\u5728\u4e00\u5b9a\u98ce\u9669\uff0c\u8bf7\u8c28\u614e\u53c2\u4e0e\u54e6\uff01</span></div>";
											U.after(X)
										}
									} else {
										U.next("div.m-list-tips").remove()
									}
								};
								var G = function() {
									if (C == 1) {
										O.attr("class", "z-arrows z-less2");
										I.attr("class", "z-arrows z-plus")
									} else {
										if (C == B || (C == F && A > 0)) {
											O.attr("class", "z-arrows z-less");
											I.attr("class", "z-arrows z-plus2")
										} else {
											O.attr("class", "z-arrows z-less");
											I.attr("class", "z-arrows z-plus")
										}
									}
								};
								var Q = null;
								var K = "\u4e0d\u80fd\u5c0f\u4e8e1\u4eba\u6b21";
								var E = "\u4e0d\u80fd\u5927\u4e8e" + B
										+ "\u4eba\u6b21";
								var D = F == A ? "\u9650\u8d2d" + A
										+ "\u4eba\u6b21"
										: "\u9650\u8d2d"
												+ A
												+ "\u4eba\u6b21\uff0c\u60a8\u5df2\u53c2\u4e0e"
												+ y + "\u4eba\u6b21";
								var S = "\u5df2\u8d85\u8fc7100\u4eba\u6b21\uff0c\u8bf7\u8c28\u614e\u53c2\u4e0e";
								N
										.keyup(
												function(Z) {
													var W = parseInt(N.val());
													var Y = 1;
													if (N.val() == "") {
														Y = ""
													} else {
														if (!J.test(W)) {
															H();
															Y = C
														} else {
															if (W == 0) {
																H();
																Y = 1
															} else {
																if (W <= B) {
																	H();
																	if (W > 100) {
																		L(true)
																	} else {
																		L(false)
																	}
																	if (W > F
																			&& A > 0) {
																		W = F;
																		V(D)
																	}
																	Y = W
																} else {
																	var X = E;
																	Y = B;
																	if (A > 0
																			&& F < B) {
																		X = D;
																		Y = F
																	}
																	V(X)
																}
															}
														}
													}
													T(Y)
												})
										.mouseover(
												function() {
													$("input:text[name=num]")
															.each(
																	function(X) {
																		var W = $(
																				this)
																				.val();
																		if ((isNaN(W)
																				|| W == "0" || W == "")) {
																			$(
																					this)
																					.blur()
																		}
																	});
													$(this)
															.attr("mouseIn",
																	"1")
															.focus().select();
													Q = function(X) {
														X = X || window.event;
														if (X
																&& X.preventDefault) {
															X.preventDefault()
														} else {
															window.event.returnValue = false
														}
														var Y = 0;
														if (X.wheelDelta) {
															Y = X.wheelDelta > 0 ? 1
																	: -1
														} else {
															if (X.detail) {
																Y = X.detail < 0 ? 1
																		: -1
															}
														}
														if (Y
																&& N
																		.attr("mouseIn") == "1") {
															var W = parseInt(N
																	.val());
															if (Y > 0) {
																if (W > 0) {
																	if (W >= B) {
																		W = B;
																		if (A == 0) {
																			V(E)
																		}
																	} else {
																		H();
																		W = W < sp?sp:(Math.ceil(W/sp)*sp+sp);
																		if(sp > B||W >= B){
																			W = B;
																		}
																		if (W > 100&&sp!=100) {
																			L(true)
																		} else {
																			L(false)
																		}
																		if (W > F
																				&& A > 0) {
																			W = F;
																			V(D)
																		}
																	}
																} else {
																	if(sp > W){
																		W = B;
																	}else{
																		W = sp;
																	}
																}
															} else {
																if (W > 1) {
																	if(sp > W){
																		W = B;
																	}else{
																		W = W < sp?sp:(Math.ceil(W/sp)*sp-sp);
																	}
																	if (W > 100&&sp!=100) {
																		L(true)
																	} else {
																		L(false)
																	}
																} else {
																	if(sp > W){
																		W = B;
																	}else{
																		W = sp;
																	}
																	if (A == 0) {
																		V(K)
																	}
																}
															}
															N.val(W);
															U
																	.find(
																			"li.f-cart-subtotal")
																	.html(
																			"\uffe5"
																					+ W
																					+ ".00");
															G();
															p()
														}
													};
													if (document.addEventListener) {
														document
																.addEventListener(
																		"DOMMouseScroll",
																		Q,
																		false)
													}
													window.onmousewheel = document.onmousewheel = Q
												})
										.mouseout(
												function() {
													$(this)
															.attr("mouseIn",
																	"0");
													var W = N.val();
													T(W);
													if (document.addEventListener) {
														document
																.removeEventListener(
																		"DOMMouseScroll",
																		Q,
																		false)
													}
													window.onmousewheel = document.onmousewheel = function() {
													}
												}).blur(function() {
											if (N.val() == "") {
												H();
												L(false);
												T(1)
											}
										});
								O.click(function() {
									var W = N.val();
									if (J.test(W)) {
										var X = parseInt(W);
										if (X > 1) {
											H();
											X = X < sp?sp:(Math.ceil(X/sp)*sp-sp);
											if(X <= 0){
												X = sp;
											}
											if(sp > B){
												X = B;
											}
											if (X > 100 && sp != 100) {
												L(true)
											} else {
												L(false)
											}
											T(X);
											G()
										}
									}
									return false
								});
								I.click(function() {
									var W = N.val();
									if (J.test(W)) {
										var X = parseInt(W);
										if (X < B) {
											H();
											X = X < sp?sp:(Math.ceil(X/sp)*sp+sp);
											if(X >= B){
												X = B;
											} 
											if (X > 100 && sp != 100) {
												L(true)
											} else {
												L(false)
											}
											if (X > F && A > 0) {
												X = F;
												V(D)
											}
											T(X);
											G()
										} else {
											if (A == 0) {
												V(E)
											}
										}
									}
									return false
								});
								if (parseInt(N.val()) > 100 && sp != 100) {
									L(true)
								}
								G()
							}
							var R = U.find('a[type="delete"]');
							R
									.click(function(X) {
										i(X);
										if ($(this).attr("isOpen") == "1") {
											return
										}
										R.attr("isOpen", "1");
										var W = function() {
											var aa = function() {
												var at = z;
												var json = getCookie("products");
												if (json != null || json != "") {
													json = eval("(" + json
															+ ")");
													var is = 0;
													$.each(json, function(n,
															value) {
														if (at == value.pId) {
															is = n
														}
													});
													json.splice(is, 1);
													json = JSON.stringify(json);
													SetCookieByExpires(
															"products", json, 1);
													o();
													var ad = n.children("dd").length;
													if (ad == 1) {
														location
																.replace("/mycart/index.html")
													} else {
														U
																.next(
																		"div.m-list-tips")
																.remove();
														U
																.animate(
																		{
																			height : -20
																		},
																		{
																			queue : false,
																			duration : 100,
																			complete : function() {
																				U
																						.remove();
																				ad--;
																				var ae = n
																						.children("dd.m-cart-fail").length;
																				if (ad == ae) {
																				} else {
																					p()
																				}
																				if (!P
																						&& ae == 0) {
																					$(
																							"#btnDelUnValid")
																							.remove()
																				}
																				if ($(
																						"div.m-rqtj-con")
																						.offset().top < $(
																						window)
																						.height()) {
																					loadImgFun()
																				}
																			}
																		})
													}
												} else {
													r("delCartF", function() {
														location.reload()
													})
												}
											};
											if (P) {
												var Y = '<div class="z-popUp f-box-prompt '
														+ (P ? ""
																: "f-box-gray")
														+ '" style="display:none;"><p>\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f</p><a href="javascript:;" title="\u786e\u5b9a" class="u-btn-determine">\u786e\u5b9a</a><a href="javascript:;" title="\u53d6\u6d88" class="u-btn-cancel">\u53d6\u6d88</a><b><s></s></b></div>';
												var ab = $(Y);
												v.append(ab);
												ab.unbind("click").click(
														function(ac) {
															i(ac)
														});
												var Z = R.offset().top
														- n.offset().top + 18;
												ab
														.css("top", Z + "px")
														.show(
																"fast",
																function() {
																	ab
																			.find(
																					"a.u-btn-determine")
																			.unbind(
																					"click")
																			.click(
																					function() {
																						aa()
																					});
																	ab
																			.find(
																					"a.u-btn-cancel")
																			.unbind(
																					"click")
																			.click(
																					function() {
																						o()
																					})
																})
											} else {
												aa()
											}
										};
										o(W);
										return false
									})
						};
						var s = function(B, y, A, z) {
						};
						var o = function(y) {
							var z = v.children("div.f-box-prompt");
							if (z.length > 0) {
								z.hide("fast", function() {
									v.find("div.f-box-prompt").remove();
									n.find('a[type="delete"]').each(function() {
										$(this).attr("isOpen", "0")
									});
									if (y != undefined) {
										y()
									}
								})
							} else {
								if (y != undefined) {
									y()
								}
							}
						};
						v.click(function() {
							o()
						});
						$("body").click(function() {
							o()
						});
						n.children("dd").each(function() {
							$(this).CartItemFun()
						});
						var u = $("#sSelAll");
						var h = $("#btnSelAll");
						var q = function() {
							if (u.find("b").length > 0) {
								u.html("");
								n.find('a[type="check"]').each(function() {
									$(this).html("")
								})
							} else {
								u.html(x);
								n.find('a[type="check"]').each(function() {
									$(this).html(x)
								})
							}
							p()
						};
						u.click(function() {
							q();
							return false
						});
						h.click(function() {
							q();
							return false
						});
						t();
						$("#btnDelete")
								.click(
										function() {
											var A = false;
											var z = "";
											n
													.find('a[type="check"]')
													.each(
															function() {
																if ($(this)
																		.find(
																				"b").length > 0) {
																	A = true;
																	z += $(this)
																			.attr(
																					"codeid")
																			+ ","
																}
															});
											if (A) {
												var y = function() {
													z = z.substring(0,
															z.length - 1);
													z = z.split(",");
													var json = getCookie("products");
													if (json != null
															|| json != "") {
														for ( var i = 0; i < z.length; i++) {
															json = eval("("
																	+ json
																	+ ")");
															var j = 0;
															$
																	.each(
																			json,
																			function(
																					n,
																					value) {
																				if (z[i] == value.pId) {
																					j = n
																				}
																			});
															json.splice(j, 1);
															json = JSON
																	.stringify(json)
														}
														SetCookieByExpires(
																"products",
																json, 1);
														r(
																"delCartS",
																function() {
																	location
																			.reload()
																})
													} else {
														r(
																"delCartF",
																function() {
																	location
																			.reload()
																})
													}
												};
												r("delCart", y)
											} else {
												r("delNone")
											}
											return false
										});
						$("#btnDelUnValid")
								.click(
										function() {
											var y = "";
											n
													.children("dd.m-cart-fail")
													.each(
															function() {
																y += $(this)
																		.find(
																				'a[type="check"]')
																		.attr(
																				"codeid")
																		+ ","
															});
											y = y.substring(0, y.length - 1);
											y = y.split(",");
											var json = getCookie("products");
											if (json != null || json != "") {
												for ( var i = 0; i < y.length; i++) {
													json = eval("(" + json
															+ ")");
													var j = 0;
													$.each(json, function(n,
															value) {
														if (y[i] == value.pId) {
															j = n
														}
													});
													json.splice(j, 1);
													json = JSON.stringify(json)
												}
												SetCookieByExpires("products",
														json, 1);
												r("delCartS", function() {
													location.reload()
												})
											} else {
												r("delCartF", function() {
													location.reload()
												})
											}
											return false
										});
						$("#btnGoPay")
								.click(
										function() {
											var A = "";
											var z = "";
											var E = "";
											var B = n.find('a[type="check"]');
											var F = false;
											var G = false;
											var C = "", y = "";
											$
													.each(
															B,
															function() {
																if ($(this)
																		.find(
																				"b").length > 0) {
																	F = true;
																	var I = $(
																			this)
																			.parent()
																			.parent()
																			.parent()
																			.find(
																					'input[name="num"]');
																	var H = $(
																			this)
																			.parent()
																			.parent()
																			.parent()
																			.find(
																					'input[name="outlimit"]');
																	if (H.length > 0) {
																		G = true
																	}
																	y = I.val();
																	if (y) {
																		C += y
																				+ ","
																	} else {
																		if (parseInt(I
																				.attr("limitbuy")) > 0) {
																			C += 0 + ","
																		} else {
																			C += 1 + ","
																		}
																	}
																	if (parseInt(I
																			.attr("limitbuy")) > 0) {
																		E += $(
																				this)
																				.attr(
																						"codeid")
																				+ ","
																	}
																	z += $(this)
																			.attr(
																					"codeid")
																			+ ","
																} else {
																	A += $(this)
																			.attr(
																					"codeid")
																			+ ","
																}
															});
											if (F && !G) {
												F = true;
												$("input:text[name=num]")
														.each(
																function(I) {
																	var H = $(
																			this)
																			.val();
																	if ($(B[I])
																			.find(
																					"b").length > 0
																			&& (isNaN(H)
																					|| H == "0" || H == "")) {
																		F = false
																	}
																});
												if (!F) {
													r("buyNumErr")
												} else {
													var D = function() {
														var userId = getCookie("userId");
														if (userId != null
																&& userId != "") {
															var ids = z;
															ids = ids
																	.substring(
																			0,
																			ids.length - 1);
															$("#ids").val(ids);
															$("#toPaymentForm")
																	.submit()
														} else {
															var I = new popLogin();
															PagePOPLoginOK = function() {
																I.hide();
																var ids = z;
																ids = ids
																		.substring(
																				0,
																				ids.length - 1);
																$("#ids").val(
																		ids);
																$(
																		"#toPaymentForm")
																		.submit()
															};
															I.show()
														}
													};
													D()
												}
											} else {
												if (G) {
													b()
												} else {
													r("selEmpty")
												}
											}
										});
						$
								.ajax({
									url : "/lottery/upcomingAnnounced.action?pageNo="
											+ 1 + "&pageSize=" + 4,
									type : "get",
									data : "json",
									success : function(data) {
										for ( var i = 0; i < data.length; i++) {
											$(
													'<div class="f-recomm-list" codeid="'
															+ data[i].productId
															+ '"><dl><dt><a href="'
															+ $www
															+ "/products/"
															+ data[i].productId
															+ '.html" title="'
															+ data[i].productName
															+ '"><img src="'
															+ $img
															+ data[i].headImage
															+ '"/></a></dt><dd class="u-recomm-name"><a href="'
															+ $www
															+ "/products/"
															+ data[i].productId
															+ '.html" title="'
															+ data[i].productName
															+ '">'
															+ data[i].productName
															+ '</a></dd><dd class="gray9">\u5269\u4f59<em>'
															+ (data[i].productPrice - data[i].currentBuyCount)
															+ "</em>\u4eba\u6b21</dd></dl></div>")
													.appendTo($("#divRecList"))
										}
										$("#divRecList")
												.children("div")
												.each(
														function(z, y) {
															var A = $(this);
															A
																	.hover(
																			function() {
																				A
																						.addClass(z == 3 ? "f-recomm-hover f-recomm-hover2"
																								: "f-recomm-hover");
																				A
																						.append('<div class="z-mask"></div><a href="javascript:;" class="u-cart-add"></a>');
																				A
																						.children(
																								"a.u-cart-add")
																						.click(
																								function() {
																									var ID = $(
																											this)
																											.parent()
																											.attr(
																													"codeid");
																									var json = getCookie("products");
																									var num;
																			                        if(data[i].singlePrice > (data[i].productPrice - data[i].currentBuyCount)){
																			                        	num = (data[i].productPrice - data[i].currentBuyCount);
																			                        }else{
																			                        	num = data[i].singlePrice;
																			                        }
																									if (json == null
																											|| json == "") {
																										var val = "[{'pId':"
																												+ ID
																												+ ",'num':"+num+"}]";
																										SetCookieByExpires(
																												"products",
																												val,
																												1)
																									} else {
																										var flag = false;
																										json = eval("("
																												+ json
																												+ ")");
																										$
																												.each(
																														json,
																														function(
																																n,
																																value) {
																															if (ID == value.pId) {
																																value.num = (parseInt(value.num) + parseInt(num));
																																flag = true
																															}
																														});
																										if (!flag) {
																											json
																													.push({
																														pId : +ID,
																														num : num
																													})
																										}
																										json = JSON
																												.stringify(json);
																										SetCookieByExpires(
																												"products",
																												json,
																												1)
																									}
																									r(
																											"addCartS",
																											function() {
																												location
																														.replace("/mycart/index.html")
																											},
																											A
																													.find("a.u-cart-add"));
																									return false
																								})
																			},
																			function() {
																				A
																						.removeClass(z == 3 ? "f-recomm-hover f-recomm-hover2"
																								: "f-recomm-hover");
																				A
																						.children(
																								"div.z-mask")
																						.remove();
																				A
																						.children(
																								"a.u-cart-add")
																						.remove()
																			})
														})
									}
								})
					};
					$.getScript("/js/poplogin.js?date=20140509", e)
				});
